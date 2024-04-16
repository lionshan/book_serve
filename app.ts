import http from 'http';
import querystring from 'querystring';
import { handleUserRouter } from './src/router/user';
import { handleBookRouter } from './src/router/book';

import { ReqType } from './src/types/httpType';
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');

    let newReq = req as ReqType;
    let url = req.url;
    if (!url?.split('?')[0]) {
        return;
    }
    if (!url?.split('?')[1]) {
        return;
    }
    newReq.path = url?.split('?')[0];
    newReq.query = querystring.parse(url?.split('?')[1]);
    const bookResult = handleBookRouter(newReq, res);
    if (bookResult) {
        res.end(JSON.stringify(bookResult));
        return;
    }
    const userResult = handleUserRouter(newReq, res);

    if (userResult) {
        res.end(JSON.stringify(userResult));
        return;
    }
    // 未命中路由： 返回404
    res.writeHead(404, {
        'Content-type': 'text/plain'
    });
    res.write('404 Not Found\n');
    res.end();
});

server.listen(3000, () => {
    console.log('server is running on http://localhost:3000');
});

interface PostDataType {
    success: boolean;
    message?: string;
    data?: any;
}
// 用于获取post请求的data
const getPostData = (req: ReqType): Promise<PostDataType> => {
    return new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({
                success: false,
                message: 'no post'
            });
            return;
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve({
                success: false,
                message: 'content-type no json'
            });
            return;
        }
        let postData = '';
        req.on('data', chunk => {
            postData += chunk.toString();
        });
        req.on('end', () => {
            if (!postData) {
                resolve({
                    success: false,
                    message: 'no post data'
                });
                return;
            }
            resolve({
                success: true,
                data: JSON.parse(postData)
            });
        });
    });
};
