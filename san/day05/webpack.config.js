module.exports={
    entry: './src/index.js',
    output:{
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules:[
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader']
            },{
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        cacheDirectory: true,
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}