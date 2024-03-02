import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskComponent } from './components/tasks/task/task.component';
import { EditTaskComponent } from './components/tasks/edit-task/edit-task.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskService } from './components/tasks/tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasksComponent,
    TaskComponent,
    EditTaskComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
