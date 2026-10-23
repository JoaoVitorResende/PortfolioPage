import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { getWritings } from 'utils/mdx/writings/getWritings';
import { getPageUrl } from 'utils/shared/get-page-url';

export default function Home() {
  return (
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
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const files = await getWritings({
    max: 3,
  });

  return {
    props: {
      featuredWritings: files,
    },
  };
};
