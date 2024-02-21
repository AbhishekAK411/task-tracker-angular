import { Component, ElementRef, ViewChild } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @ViewChild('taskNameInput') taskNameRef!: ElementRef;
  @ViewChild('taskDescriptionInput') taskDescriptionRef!: ElementRef;

  constructor(private taskService: TaskService) {}
  
  onAddTask() {
    const newName: string = this.taskNameRef.nativeElement.value;
    const newDescription: string = this.taskDescriptionRef.nativeElement.value;
    this.taskService.addTask(newName, newDescription);
  }
}
