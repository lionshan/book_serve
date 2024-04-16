import http from 'http';
import querystring from 'querystring';

export interface ReqType extends http.IncomingMessage {
    path: string;
    query: querystring.ParsedUrlQuery;
    body: any;
}
