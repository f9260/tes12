const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  output: 'export',
  distDir: 'dist',      // Enables static HTML export
  images: {
    unoptimized: true,   // Disables image optimization
  },
})