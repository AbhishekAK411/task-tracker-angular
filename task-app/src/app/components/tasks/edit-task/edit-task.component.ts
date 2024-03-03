import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TaskService } from '../tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../tasks.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  taskUpdated!: Task
  @ViewChild('newNameInput') newNameInputRef!: ElementRef
  @ViewChild('newDescriptionInput') newDescriptionInputRef!: ElementRef 
  private taskId!: number;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskId = +this.route.snapshot.params['id'];
    const task = this.taskService.getSingleTask(this.taskId);
    if(task) {
      this.newNameInputRef.nativeElement.value = task.taskName;
      this.newDescriptionInputRef.nativeElement.value = task.taskDescription;
    }
  }

  onUpdateTask(): void {
    const newName = this.newNameInputRef.nativeElement.value;
    const newDescription = this.newDescriptionInputRef.nativeElement.value;
    
    if(this.taskId !== undefined) {
      this.taskService.updateTask(this.taskId, newName, newDescription);
      this.router.navigate(["/"]);
    }
  }
}
