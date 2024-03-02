import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('descriptionInput') descriptionInputRef!: ElementRef;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    
  }

  onAdd() {
      const newName = this.nameInputRef.nativeElement.value;
      const newDescription = this.descriptionInputRef.nativeElement.value;
      this.taskService.addTasks(newName, newDescription);
  }

}
