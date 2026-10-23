import React from 'react';
import { NextSeo } from 'next-seo';
import { About as AboutScreen } from 'screens/About';
import { getPageUrl } from 'utils/shared/get-page-url';

export default function About() {
  return (
    <>
      <NextSeo
        title="About | Joao Vitor Resende"
        description=""
        canonical={getPageUrl()}
        openGraph={{
          title: 'About | Joao Vitor Resende',
          description: '',
        }}
      />
      <AboutScreen />
    </>
  );
}
