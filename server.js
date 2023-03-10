import http from 'http'

const requestListener = function (req, res) {
    console.log(req.method)
    // 跨域，配置cors是其中一个解决方案
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'pjw')
    console.log(req.url)
    console.log(req.headers)
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end()
        return;
    } else {
        res.writeHead(200);
        res.end('hello world123');
    }

}

const server = http.createServer(requestListener);
server.listen(8080, () => console.log('server is listening on http://localhost:8080'));



function factorial(n, acc = 1) {
    "use strict";
    if (n <= 1) return acc;
    const result = factorial(n - 1, n * acc);
    return result;
}

const babel = require("@babel/core");
import babel from '@babel/core'

"plugins": [
    "@babel/plugin-transform-destructuring",
    "@babel/plugin-transform-arrow-functions"
],