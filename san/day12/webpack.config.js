module.exports={
    entry: './src/main.js',
    output:{
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer:{
        publicPath: '/dist'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/
            },
            {
                test: /\.san$/,
                use: 'san-loader',
                exclude: /node_modules/
            }
        ]
    }
}