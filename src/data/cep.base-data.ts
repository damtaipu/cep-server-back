export interface ApiResponse<T = unknown> {
    code: number;
    message: string;
    data: T;
}

export default ApiResponse;
