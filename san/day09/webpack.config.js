module.exports={
    entry:'./src/main.js',
    output:{
        filename: 'bundle.js'
    },
    mode:'development',
    devServer:{
        publicPath: '/dist'    //这里的这一‘/’很重要
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader']
            },
            {
                test:/\.san$/,
                exclude:/node_modules/,
                use: {
                    loader:'san-loader'
                }
            },
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            }
        ]
    },
}
