import { ReqType } from '../types/httpType';
import type { ServerResponse } from 'http';
import { SuccessRes } from '../model/resModel';
const handleUserRouter = (req: ReqType, res: ServerResponse) => {
    let method = req.method;

    if (method === 'POST' && req.path === '/api/user/login') {
        return new SuccessRes({
            id: 1,
            name: '张三'
        });
    }
};

export { handleUserRouter };
