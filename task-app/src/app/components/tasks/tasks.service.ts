import { Injectable } from "@angular/core";
import { Task } from "./tasks.model";

@Injectable()
export class TaskService {
    private tasks: Task[] = [];

    getTasks() {
        return this.tasks.slice();
    }
}