import { SchemaEntityWidget } from '@/widgets/SchemaEntityWidget';
import { petOperations, petSchema } from '@/shared/api';

function PetsPage() {
  return (
    <SchemaEntityWidget
      schema={petSchema}
      entityName="Pets"
      operations={petOperations}
    />
  );
}

export default PetsPage;
