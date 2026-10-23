const isProd = process.env.NODE_ENV === 'production';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // substitui o otimizador, que não existe em site estático
    domains: ['picsum.photos'], // pode remover se não usar mais
  },
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  // Só se o repo NÃO for <usuario>.github.io:
  // basePath: '/nome-do-repo',
  // assetPrefix: '/nome-do-repo/',
};

module.exports = withPWA(nextConfig);