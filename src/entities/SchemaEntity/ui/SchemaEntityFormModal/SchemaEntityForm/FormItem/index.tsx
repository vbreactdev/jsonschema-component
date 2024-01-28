import React from 'react';
import { EnumFormItem } from './EnumFormItem.tsx';
import { TextFormItem } from './TextFormItem.tsx';
import type { SchemaPropertiesValues } from '@/shared/model';
import type { FormData } from '@/entities/SchemaEntity';

interface FormItemProps {
  property: [string, SchemaPropertiesValues];
  loading: boolean;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export const FormItem = ({
  property,
  loading,
  formData,
  setFormData,
}: FormItemProps) => {
  const [name, value] = property;
  const enumItems = value.items?.enum;

  if (value.type === 'array' && enumItems) {
    return (
      <EnumFormItem
        enumItems={enumItems}
        setFormData={setFormData}
        loading={loading}
        name={name}
      />
    );
  }

  return (
    <TextFormItem
      name={name}
      value={formData[name] as string}
      setFormData={setFormData}
      loading={loading}
    />
  );
};
