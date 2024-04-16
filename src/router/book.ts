import { ReqType } from '../types/httpType';
import type { ServerResponse } from 'http';
import { SuccessRes } from '../model/resModel';
const handleBookRouter = (req: ReqType, res: ServerResponse) => {
    let method = req.method;
    // 获取图书列表
    if (method === 'GET' && req.path === '/api/book/list') {
        return new SuccessRes({
            id: 1,
            name: '三国演义'
        });
    }
    // 获取图书详情
    if (method === 'GET' && req.path === '/api/book/detail') {
        return new SuccessRes({
            id: 1,
            name: '三国演义'
        });
    }

    // 新增图书
    if (method === 'POST' && req.path === '/api/book/add') {
        return new SuccessRes({
            id: 1,
            name: '三国演义'
        });
    }
    // 更新图书
    if (method === 'POST' && req.path === '/api/book/update') {
        return new SuccessRes({
            id: 1,
            name: '三国演义'
        });
    }

    // 删除图书
    if (method === 'POST' && req.path === '/api/book/delete') {
        return new SuccessRes({
            id: 1,
            name: '三国演义'
        });
    }
};

export { handleBookRouter };
