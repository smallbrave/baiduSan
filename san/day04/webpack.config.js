module.exports={
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer:{
        publicPath: '/dist'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader','css-loader'],
            exclude: /node_modules/,
        },{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: ['@babel/preset-env']   
                }
            }
        }
            
        ]
    }
}