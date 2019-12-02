module.exports={
    entry: "./src/main.js",
    output:{
        filename: "bundle.js",
    },
    mode: "development",
    devServer:{
        publicPath:'/dist'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.san$/,
                exclude: /node_modules/,
                use: 'san-loader'
            }
        ]
    }
}