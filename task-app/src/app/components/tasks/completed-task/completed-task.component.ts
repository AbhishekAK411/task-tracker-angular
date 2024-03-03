import { Component, OnInit } from '@angular/core';
import { TaskService } from '../tasks.service';
import { Task } from '../tasks.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.css']
})
export class CompletedTaskComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getCompletedTasks();
  }

  redirectToSingleTask(id: number) {
    
  }

  redirectToUpdate(id: number) {

  }

  deleteTask(id: number) {

  }

  redirectToCreateTask() {

  }
}
