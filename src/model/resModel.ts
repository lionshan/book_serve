class BaseRes {
    message: string = '';
    data: any;
    constructor(data: any, message?: string) {
        if (typeof data === 'string') {
            this.message = data;
            data = null;
            message = '';
        }
        if (data) {
            this.data = data;
        }
        if (message) {
            this.message = message;
        }
    }
}

class SuccessRes extends BaseRes {
    code: number = 200;
    constructor(data: any, message?: string) {
        super(data, message);
        this.code = 200;
    }
}

class ErrorRes extends BaseRes {
    code: number = 500;
    constructor(data: any, message?: string) {
        super(data, message);
    }
}

export { SuccessRes, ErrorRes };
