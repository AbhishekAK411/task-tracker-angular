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
  private fragmentLoaded!: string | null;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskId = +this.route.snapshot.params['id'];
    this.fragmentLoaded = this.route.snapshot.fragment;
    if(this.fragmentLoaded){
      this.task = this.taskService.getSingleCompletedTask(this.taskId);
    }else{
      this.task = this.taskService.getSingleTask(this.taskId);
    }
  }

  redirectToUpdate() {
    this.router.navigate(['tasks', this.taskId, 'update']);
  }
}
