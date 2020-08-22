const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'index_bundle.js',
        },
        module:{
            rules:[
                {
                    test:/\.js$/,
                    exclude: [ new RegExp(`${__dirname}/node_modules/(?!js-utils)`) ],
                    loader: 'babel-loader',
                    options: {
                        // XXX The require.resolve bellow solves failures to locate the
                        // presets when lib-jitsi-meet, for example, is npm linked in
                        // jitsi-meet.
                        plugins: [
                            require.resolve(
                                '@babel/plugin-transform-flow-strip-types'
                            ),
                            require.resolve(
                                '@babel/plugin-proposal-class-properties'
                            ),
                            require.resolve(
                                '@babel/plugin-proposal-export-default-from'
                            ),
                            require.resolve(
                                '@babel/plugin-proposal-export-namespace-from'
                            ),
                            require.resolve(
                                '@babel/plugin-proposal-nullish-coalescing-operator'
                            ),
                            require.resolve(
                                '@babel/plugin-proposal-optional-chaining'
                            )
                        ],
                        presets: [
                            [
                                require.resolve('@babel/preset-env'),
    
                                // Tell babel to avoid compiling imports into CommonJS
                                // so that webpack may do tree shaking.
                                {
                                    modules: false,
    
                                    // Specify our target browsers so no transpiling is
                                    // done unnecessarily. For browsers not specified
                                    // here, the ES2015+ profile will be used.
                                    targets: {
                                        chrome: 58,
                                        electron: 2,
                                        firefox: 54,
                                        safari: 11
                                    }
                                }
                            ],
                            require.resolve('@babel/preset-flow'),
                            require.resolve('@babel/preset-react')
                        ]
                    },
                },
            ]
        },
        plugins:[
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]
        ,
        resolve: {
            //modulesDirectories: ['node_modules', 'bower_components'],
            extensions: ['.js', '.jsx']
          },
}