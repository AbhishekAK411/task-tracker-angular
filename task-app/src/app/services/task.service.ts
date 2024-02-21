import { Injectable } from "@angular/core";
import { Task } from "../models/task.model";

@Injectable()
export class TaskService {
    private tasks: Task[] = [];

    getTasks() {
        return this.tasks.slice();
    }

    addTask(taskName: string, taskDescription: string) {
        this.tasks.push({taskName, taskDescription, taskStatus: 'pending'});
        console.log(this.tasks);
    }

    updateTask(id: number, updatedTask: string, updatedDescription: string) {
        
    }

    deleteTask(id: number) {
        
    }
}