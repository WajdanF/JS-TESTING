const path = require('path');//requiring a path/module from node

module.exports = {
    entry: "./src/index.js", //file we want (input almost) where the source file lives (relative path)

    output: {
        //where we want to output to
        path: path.resolve(__dirname, "dist/assets"), //__dirname gets the absolute path to the folder webpack.config is in
        //resolve takes in 2 paths we want to combine (absolute path)

        filename: "bundle.js", //filename we save as
    },

    devServer: {
        contentBase: path.resolve(__dirname, "dist"), //where the base directly is to uplaod to server (absoulte path)
        //^ The folder where the index file is

        publicPath: "/assets/", //where the js is being served up from (the folder)
    },
    
    module:{
        rules:[{//each object is a rule
            test:/\.js$/, //anyfile that is a js file //which files we want to run through the lo   aders
            exclude: /node_module/, //skips over the node_module
            //^ js file that is not in nodemodule
            
            use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            }
        }]
    }
};//exports a webpack config
