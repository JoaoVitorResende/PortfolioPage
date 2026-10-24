import { NextSeo } from 'next-seo';
import { Home as HomeScreen } from 'screens/Home';
import { getPageUrl } from 'utils/shared/get-page-url';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Home | Joao Vitor Resende"
        description="Full-stack software engineer based in Brazil and focused on backend solutions"
        canonical={getPageUrl()}
        openGraph={{
          title: 'Home | Joao Vitor Resende',
          description:
            'Full-stack software engineer based in Brazil and focused on backend solutions',
        }}
      />
      <HomeScreen />
    </>
  );
}
