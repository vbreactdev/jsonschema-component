import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { getTableCellValue } from '@/entities/SchemaEntity';
import type { SchemaItem } from '@/entities/SchemaEntity';
import type { SchemaProperties } from '@/shared/model';

interface SchemaEntityDataGridProps {
  properties: SchemaProperties;
  data: SchemaItem[];
}

export const SchemaEntityDataGrid = ({
  data,
  properties,
}: SchemaEntityDataGridProps) => {
  const rows = data.map((row, index) => ({ ...row, uniqueTableId: index }));

  const columns: GridColDef[] = Object.keys(properties).map((field) => ({
    field: field,
    headerName: field,
    flex: 1,
    minWidth: 150,
    valueGetter: (params) => getTableCellValue(params.row, field),
  }));

  return (
    <DataGrid
      autoHeight
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { pageSize: 10 },
        },
      }}
      pageSizeOptions={[10, 25, 50, 100]}
      getRowId={(row) => row.uniqueTableId}
    />
  );
};
