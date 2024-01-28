export interface SchemaPropertiesValues {
  type: string;
  items?: {
    type: string;
    enum?: string[];
  };
}

export type SchemaProperties = Record<string, SchemaPropertiesValues>;

export interface Schema {
  type: string;
  properties: SchemaProperties;
  required: string[];
}

export interface Operation {
  name: string;
  url: string;
  method: 'GET' | 'POST';
  schema: Schema;
}
