const { esbuildPluginAliasPath } = require('esbuild-plugin-alias-path')
const path = require('path')

function createConfig(isDev = true) {
  return {
    bundle: true,
    entryPoints: ['src/app.js'],
    incremental: isDev,
    minify: !isDev,
    outfile: 'dist/app.js',
    platform: 'node',
    plugins: [
      esbuildPluginAliasPath({
        alias: { '~/*': path.resolve(__dirname, './src') },
      }),
    ],
  }
}
module.exports = createConfig
