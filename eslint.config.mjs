import nextConfig from 'eslint-config-next';

const eslintConfig = [
  {
    ignores: ['.next/**', 'node_modules/**', 'legacy/**', 'scripts/**', 'public/**'],
  },
  ...nextConfig,
];

export default eslintConfig;
