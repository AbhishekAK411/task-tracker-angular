import { Component, OnInit } from '@angular/core';
import { TaskService } from '../tasks/tasks.service';
import { Task } from '../tasks/tasks.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tasks: Task[] = []; 

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    console.log(this.tasks);
  }

  redirectToCreateTask() {
    this.router.navigate(['/tasks']);
  }
}
