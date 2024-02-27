import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  public tasks: Task[] = [];

  constructor(
      private taskService: TaskService,
      private router: Router
    ) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.taskService.tasksChanged.subscribe(
      (tasks: Task[]) => {
        this.tasks = tasks;
      }
    )
  }

  onDeleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  onUpdateTask(id: number) {
    this.router.navigate(['/update', id]);
  }
}
