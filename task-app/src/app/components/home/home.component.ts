import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskService } from '../tasks/tasks.service';
import { Task } from '../tasks/tasks.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  tasks: Task[] = []; 
  private changedTasksSubscription!: Subscription;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.changedTasksSubscription = this.taskService.tasksChanged.subscribe(
      (updatedTasks: Task[]) => {
        this.tasks = updatedTasks;
      }
    )
  }

  ngOnDestroy(): void {
    this.changedTasksSubscription.unsubscribe();
  }

  redirectToCreateTask() {
    this.router.navigate(['/tasks']);
  }

  redirectToSingleTask(id: number) {
    this.router.navigate(['/tasks', id]);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  changeTaskStatus(id: number) {
    this.taskService.changeTaskStatus(id);
  }
}
