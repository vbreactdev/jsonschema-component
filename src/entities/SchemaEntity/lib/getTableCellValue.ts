interface SchemaObjectValue {
  id: number;
  name: string;
}

export type SchemaItem = Record<
  string,
  | number
  | string
  | undefined
  | string[]
  | SchemaObjectValue
  | SchemaObjectValue[]
>;

const isSchemaObjects = (
  value: SchemaObjectValue[] | string[],
): value is SchemaObjectValue[] =>
  value.length > 0 && typeof value[0] === 'object';

export const getTableCellValue = (item: SchemaItem, field: string) => {
  const value = item[field];

  if (Array.isArray(value)) {
    if (isSchemaObjects(value)) {
      return value.map((schemaObject) => schemaObject.name).join(', ');
    }

    return value.join(', ');
  }

  if (typeof value === 'object') {
    return value.name;
  }

  return value?.toString();
};
