export class Task {
    public taskName: string;
    public taskDescription: string;
    public taskStatus: string;

    constructor(taskName: string, taskDescription: string, taskStatus: string) {
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.taskStatus = taskStatus;
    }
}