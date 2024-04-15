const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {

    // console.log('req....',req.url);
    // let query = querystring.parse(req.url.split('?')[1]);

    // console.log('query...',query);
    // res.end(JSON.stringify(query));

    if(req.method === 'POST') {
        console.log('req.content-type...',req.headers['content-type']);

        let postData = '';

        req.on('data', chunk => {
            postData += chunk.toString();
        })
        
        req.on('end', () => {
            console.log('postData...',postData);
            res.end('postData,hello world');
        })
    }
    else {
        res.end('hello world');
    }
})



server.listen(3000);
