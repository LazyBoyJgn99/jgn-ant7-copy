const { injectBabelPlugin } = require('react-app-rewired');
const path = require('path');
// function resolve(dir) {
//     return path.join(__dirname, '.', dir)
// }
// module.exports = function override(config, env) {
//     // do stuff with the webpack config...
//     config.resolve.alias = {
//         '@': resolve('src')
//     }
//     config = injectBabelPlugin(
//              ['import', {
//                  libraryName: 'antd',
//                  libraryDirectory: 'es',
//                  style: 'css'
//              }],
//              config,
//            );
//     return config;
// };
const { override, fixBabelImports ,addWebpackAlias } = require('customize-cra');


module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addWebpackAlias({'@':path.resolve(__dirname,"src")})
);
