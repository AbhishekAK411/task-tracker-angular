import { Injectable, EventEmitter } from "@angular/core";
import { Task } from "../models/task.model";

@Injectable()
export class TaskService {
    tasksChanged = new EventEmitter<Task[]>();
    private tasks: Task[] = [];


    getTasks() {
        return this.tasks.slice();
    }

    addTask(taskName: string, taskDescription: string) {
        this.tasks.push({taskName, taskDescription, taskStatus: 'pending'});
    }

    updateTask(id: number, updatedTask: string, updatedDescription: string) {
        const taskToUpdate = this.tasks[id];

        if(taskToUpdate){
            taskToUpdate.taskName = updatedTask;
            taskToUpdate.taskDescription = updatedDescription;
        }
    }

    deleteTask(id: number) {
        this.tasks.splice(id, 1);
        this.tasksChanged.emit(this.tasks.slice());
    }
}