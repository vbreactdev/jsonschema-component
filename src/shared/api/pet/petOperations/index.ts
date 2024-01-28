import petsByStatusSchema from './petsByStatusSchema.json';
import type { Operation } from '@/shared/model';

export const petOperations: Operation[] = [
  {
    name: 'Get by status',
    url: 'https://petstore.swagger.io/v2/pet/findByStatus',
    method: 'GET',
    schema: petsByStatusSchema,
  },
];
