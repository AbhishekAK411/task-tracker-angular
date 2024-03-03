import { Injectable } from "@angular/core";
import { Task } from "./tasks.model";
import { Subject } from "rxjs";


@Injectable()
export class TaskService {
    tasksChanged = new Subject<Task[]>();
    singleTaskChanged = new Subject<Task>();

    private tasks: Task[] = [
        new Task('Test task 1', 'Test description 1', 'pending'),
        new Task('Test task 2', 'Test description 2', 'pending'),
    ];

    private completedTasks: Task[] = [
        new Task('Test task 3', 'Test description 3', 'completed'),
        new Task('Test task 4', 'Test description 4', 'completed')
    ]

    getTasks() {
        return this.tasks.slice(); 
    }

    getCompletedTasks() {
        return this.completedTasks.slice();
    }

    getSingleTask(id: number) {
        const singleTask: Task | undefined = this.tasks.find((_, i) => i === id);
        return singleTask;
    }

    addTasks(taskName: string, taskDescription: string) {
        this.tasks.push({taskName, taskDescription, taskStatus: 'pending'});
    }

    updateTask(id: number, newName: string, newDescription: string) {
        const taskToUpdate = this.getSingleTask(id);

        if(taskToUpdate){
            taskToUpdate.taskName = newName;
            taskToUpdate.taskDescription = newDescription;
            this.singleTaskChanged.next(taskToUpdate);
        }

    }

    deleteTask(id: number) {
        this.tasks.splice(id, 1);
        this.tasksChanged.next(this.getTasks());
    }

    changeTaskStatus(id: number) {
        const taskToChange = this.getSingleTask(id);

        if(taskToChange && taskToChange.taskStatus !== 'completed') {
            taskToChange.taskStatus = 'completed';
        }

        this.tasksChanged.next(this.getTasks());
    }
}