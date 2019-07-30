const path = require("path");
const MODE = "development";

const nodeExternals = require("webpack-node-externals");

module.exports = {
    target:"node",
    externals:[nodeExternals()],
    mode:MODE,
    devtool:"source-map",
    entry:{
        main:path.join(__dirname,"./js/main.js")
    },
    output:{
        path:path.join(__dirname,"/js"),
        filename:"dist.js"
    },
    
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            presets:[
                                "@babel/preset-env"
                            ]
                        }
                    }
                ]
            }
        ]
    }
};