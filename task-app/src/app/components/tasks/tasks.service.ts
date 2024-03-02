import { Injectable } from "@angular/core";
import { Task } from "./tasks.model";

@Injectable()
export class TaskService {
    private tasks: Task[] = [
        // new Task('Test task 1', 'Test description 1', 'pending'),
        // new Task('Test task 2', 'Test description 2', 'pending'),
    ];

    getTasks() {
        return this.tasks.slice();
    }

    addTasks(taskName: string, taskDescription: string) {
        this.tasks.push({taskName, taskDescription, taskStatus: 'pending'});
    }
}