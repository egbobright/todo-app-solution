import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Response } from './response';
import { TodoDTO } from './todo.dto';
import { todo } from './todo.mock';


let dataFromTODO = todo;

@Controller("/todos")
export class TodoController {
    @Get()
    getAllTodo(): Response{
        return ({
            status: 200,
            success: true,
            successMessage: "All todos retrieved successfully",
            data: dataFromTODO
        });
    }

    @Get("/:id")
    getById(@Param('id') id: string): Response{
        const todo = dataFromTODO.find(todo => todo.id === id);
        return ({
            status: 200,
            success: true,
            successMessage: "A todo retrieved successfully",
            data: todo
        });
    }

    @Post()
    createTodo(@Body() createTodo: TodoDTO): Response {
        const newTodo: TodoDTO = {
            id: (todo.length + 1).toString(),
            ...createTodo
        };
        dataFromTODO = [...dataFromTODO, newTodo];
        return ({
            status: 200,
            success: true,
            successMessage: "Todo created successfully"
        }); 
    }

    @Put('/:id')
    updateTodoById(@Body() updateDTO: TodoDTO, @Param("id") id): Response{
        const updateTodo = dataFromTODO.map(todo => {todo.id === id? updateDTO : todo});
        return ({
            status: 200,
            success: true,
            successMessage: "Todo updated successfully"
        }); 
    }

    @Delete('/:id')
    deleteATodoById(@Param('id') id: string): Response{
        dataFromTODO = dataFromTODO.filter(todo => todo.id !== id);
        return ({
            status: 200,
            success: true,
            successMessage: "Todo deleted successfully"
        });
    }

}
