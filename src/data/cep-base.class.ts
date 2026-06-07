import { Response } from 'express';
import ApiResponse from './cep.base-data';

export class BaseData<T = unknown> implements ApiResponse<T> {
    constructor(
        public readonly code: number,
        public readonly message: string,
        public readonly data: T
    ) {}

    public sendResponse(res: Response): Response<ApiResponse<T>> {
        return res.status(this.code).json(this.toJSON());
    }

    private toJSON(): ApiResponse<T> {
        return {
            code: this.code,
            message: this.message,
            data: this.data
        };
    }
}
