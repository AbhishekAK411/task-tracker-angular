import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskService } from '../tasks.service';
import { Task } from '../tasks.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.css']
})
export class CompletedTaskComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  private changedCompleteTasks!: Subscription;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getCompletedTasks();
    this.changedCompleteTasks = this.taskService.completedTasksChanged.subscribe(
      (changed: Task[]) => {
        this.tasks = changed;
      }
    );
  }

  ngOnDestroy(): void {
    this.changedCompleteTasks.unsubscribe();
  }

  redirectToSingleTask(id: number) {
    this.router.navigate(['/tasks', id], {fragment: 'completed'});
  }

  deleteTask(id: number) {
    this.taskService.deleteCompletedTask(id);
  }

  redirectToHome() {
    this.router.navigate(['/']);
  }
}
