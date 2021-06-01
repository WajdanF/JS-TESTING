const path = require('path');//requiring a path/module from node

module.exports = {
    entry:'./src/index.js',//file we want (input almost) where the source file lives (relative path)

    output: {//where we want to output to
        path:path.resolve(__dirname,'dist/assets'),//__dirname gets the absolute path to the folder webpack.config is in
        //resolve takes in 2 paths we want to combine (absolute path)

        filename: 'bundle.js'//filename we save as
    }

};//exports a webpack config
