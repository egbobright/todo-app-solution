import { TodoDTO } from "./todo.dto";

export class Response{
    status: number;
    success: boolean;
    successMessage?: string;
    data?: object;
}