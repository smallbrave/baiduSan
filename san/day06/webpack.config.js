module.exports={
    entry: "./src/index.js",
    output: {
        filename: "bundle.js"
    },
    mode: "development",
    devServer:{
        publicPath: "/dist"
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader']
            }
        ]

    }
}