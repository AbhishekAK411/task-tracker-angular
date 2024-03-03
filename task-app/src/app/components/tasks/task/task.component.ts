import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../tasks.service';
import { Task } from '../tasks.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task!: Task | undefined;
  private taskId!: number;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskId = +this.route.snapshot.params['id'];
    this.task = this.taskService.getSingleTask(this.taskId);
  }

  redirectToUpdate() {
    this.router.navigate(['tasks', this.taskId, 'update']);
  }
}
