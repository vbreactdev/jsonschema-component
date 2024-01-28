import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container, CssBaseline } from '@mui/material';
import { Routing } from '@/pages';

export const App = () => (
  <>
    <CssBaseline />
    <Container sx={{ pt: 3 }}>
      <Routing />
    </Container>
  </>
);
