import React, { useState } from 'react';
import { Box, Button, CircularProgress } from '@mui/material';
import { toQueryString } from '@/entities/SchemaEntity';
import { FormItem } from './FormItem';
import type { Operation } from '@/shared/model';
import type { SchemaItem, FormData } from '@/entities/SchemaEntity';

interface SchemaEntityFormProps {
  operation: Operation;
  setOperation: (operation: undefined) => void;
  setData: (data: SchemaItem[]) => void;
}

export const SchemaEntityForm = ({
  operation,
  setData,
  setOperation,
}: SchemaEntityFormProps) => {
  const [formData, setFormData] = useState<FormData>({});
  const [loading, setLoading] = useState(false);

  const isFieldEmpty = (key: string) => {
    const value = formData[key];

    if (Array.isArray(value)) {
      return value.length === 0;
    }

    return !value;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emptyRequiredFields = operation.schema.required.filter((key) =>
      isFieldEmpty(key),
    );

    if (emptyRequiredFields.length > 0) {
      const fieldNames = emptyRequiredFields.join(', ');
      alert(`Please fill in all required fields: ${fieldNames}`);
      return;
    }

    const isGetMethod = operation.method.toUpperCase() === 'GET';
    const url = isGetMethod
      ? `${operation.url}?${toQueryString(formData)}`
      : operation.url;

    try {
      setLoading(true);

      const response = await fetch(url, {
        method: operation.method,
        body: isGetMethod ? null : JSON.stringify(formData),
      });
      const responseData = await response.json();

      setData(Array.isArray(responseData) ? responseData : [responseData]);
      setOperation(undefined);
    } catch (error) {
      console.error('Error during fetch:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" alignItems="center">
        {Object.entries(operation.schema.properties).map((property) => (
          <FormItem
            key={property[0]}
            property={property}
            formData={formData}
            setFormData={setFormData}
            loading={loading}
          />
        ))}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Submit'}
        </Button>
      </Box>
    </form>
  );
};
