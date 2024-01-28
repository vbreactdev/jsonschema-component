import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { SchemaEntityDataGrid } from '@/entities/SchemaEntity';
import { SchemaEntityOperations } from '@/features/SchemaEntityOperations';
import type { SchemaItem } from '@/entities/SchemaEntity';
import type { Operation, Schema } from '@/shared/model';

interface SchemaEntityWidgetProps {
  entityName: string;
  schema: Schema;
  operations: Operation[];
}

export const SchemaEntityWidget = ({
  schema,
  entityName,
  operations,
}: SchemaEntityWidgetProps) => {
  const [data, setData] = useState<SchemaItem[]>([]);

  return (
    <Box>
      <Typography variant="h2" align="center">
        {entityName}
      </Typography>
      <SchemaEntityOperations setData={setData} operations={operations} />
      <SchemaEntityDataGrid data={data} properties={schema.properties} />
    </Box>
  );
};
