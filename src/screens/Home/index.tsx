import { Stack } from 'components/Stack';
import { Base } from 'layouts/Base';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Header } from './components/Header';

export function Home() {
  return (
    <Base>
      <Stack spacing="5rem">
        <Header />
        <About />
        <Contact />
      </Stack>
    </Base>
  );
}
