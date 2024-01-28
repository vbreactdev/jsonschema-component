import { Card, CardContent, Modal } from '@mui/material';
import { SchemaEntityForm } from './SchemaEntityForm';
import type { SchemaItem } from '@/entities/SchemaEntity';
import type { Operation } from '@/shared/model';

interface SchemaEntityFormModalProps {
  operation: Operation | undefined;
  setOperation: (operation: undefined) => void;
  setData: (data: SchemaItem[]) => void;
}

export const SchemaEntityFormModal = ({
  operation,
  setOperation,
  setData,
}: SchemaEntityFormModalProps) => (
  <Modal
    open={!!operation}
    onClose={() => setOperation(undefined)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
  >
    <Card sx={{ width: 500 }}>
      <CardContent>
        {operation && (
          <SchemaEntityForm
            setData={setData}
            operation={operation}
            setOperation={setOperation}
          />
        )}
      </CardContent>
    </Card>
  </Modal>
);
