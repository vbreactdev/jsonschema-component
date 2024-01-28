import React from 'react';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import type { FormData } from '@/entities/SchemaEntity';

interface EnumFormItemProps {
  name: string;
  loading: boolean;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  enumItems: string[];
}

export const EnumFormItem = ({
  name,
  loading,
  setFormData,
  enumItems,
}: EnumFormItemProps) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;

    setFormData((formData) => {
      const existingValues = (formData[name] || []) as string[];

      if (checked) {
        return { ...formData, [name]: [...existingValues, value] };
      }

      return {
        ...formData,
        [name]: existingValues.filter((item) => item !== value),
      };
    });
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" align="center">
        {name}
      </Typography>
      {enumItems.map((enumValue) => (
        <FormControlLabel
          key={enumValue}
          label={enumValue}
          control={
            <Checkbox
              name={name}
              value={enumValue}
              onChange={handleCheckboxChange}
              disabled={loading}
            />
          }
        />
      ))}
    </Box>
  );
};
