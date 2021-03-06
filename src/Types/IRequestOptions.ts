export type IRequestOptions = {
    /* HTTP Method */
    Method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH';
    Headers?: {
        'a-im'?: string | number;
        accept?: string | number;
        'accept-charset'?: string | number;
        'accept-datetime'?: string | number;
        'accept-encoding'?: string | number;
        'accept-language'?: string | number;
        'access-control-request-headers'?: string | number;
        'access-control-request-method'?: string | number;
        authorization?: string | number;
        'cache-control'?: string | number;
        connection?: string | number;
        'content-length'?: string | number;
        'content-type'?: string | number;
        cookie?: string | number;
        date?: string | number;
        dnt?: string | number;
        expect?: string | number;
        forwarded?: string | number;
        from?: string | number;
        host?: string | number;
        'if-match'?: string | number;
        'if-modified-since'?: string | number;
        'if-none-match'?: string | number;
        'if-range'?: string | number;
        'if-unmodified-since'?: string | number;
        'max-forwards'?: string | number;
        origin?: string | number;
        pragma?: string | number;
        'proxy-authorization'?: string | number;
        range?: string | number;
        referer?: string | number;
        te?: string | number;
        upgrade?: string | number;
        'user-agent'?: string | number;
        via?: string | number;
        warning?: string | number;
        'x-csrf-token'?: string | number;
        'x-requested-with'?: string | number;

        [Name: string]: string | number | undefined;
    };
    Query?: object;
    Form?: object;
    Body?: string | object | Buffer;
    Timeout?: number;
    ParseJSON?: boolean;
    EvaluateHeaders?: boolean;
};
