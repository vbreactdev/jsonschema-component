import { useState } from 'react';
import { Button, Stack } from '@mui/material';
import { SchemaEntityFormModal } from '@/entities/SchemaEntity';
import type { SchemaItem } from '@/entities/SchemaEntity';
import type { Operation } from '@/shared/model';

interface SchemaEntityOperationsProps {
  setData: (data: SchemaItem[]) => void;
  operations: Operation[];
}

export const SchemaEntityOperations = ({
  setData,
  operations,
}: SchemaEntityOperationsProps) => {
  const [operation, setOperation] = useState<Operation>();

  return (
    <>
      <SchemaEntityFormModal
        operation={operation}
        setOperation={setOperation}
        setData={setData}
      />
      <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
        {operations.map((operation, index) => (
          <Button
            size="small"
            key={index}
            onClick={() => setOperation(operation)}
          >
            {operation.name}
          </Button>
        ))}
      </Stack>
    </>
  );
};
