const path = require("path")
const node_externals = require("webpack-node-externals")

const config = {
    name : "server",
    target: "node",
    devtool: false,
    entry: [path.join(__dirname, '/server/server.js')],
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "server.generated.js",
        libraryTarget: "commonjs2"
    },
    externals : node_externals(), 
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    }
}

module.exports = config