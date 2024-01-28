import React from 'react';
import { TextField } from '@mui/material';
import type { FormData } from '@/entities/SchemaEntity';

interface TextFormItemProps {
  loading: boolean;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  name: string;
  value: string | undefined;
}

export const TextFormItem = ({
  loading,
  setFormData,
  name,
  value = '',
}: TextFormItemProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  return (
    <TextField
      label={name}
      type="text"
      name={name}
      value={value}
      onChange={handleInputChange}
      margin="normal"
      fullWidth
      sx={{ mb: 2 }}
      disabled={loading}
    />
  );
};
