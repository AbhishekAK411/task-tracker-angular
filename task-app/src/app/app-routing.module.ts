import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { TaskComponent } from "./components/tasks/task/task.component";
import { EditTaskComponent } from "./components/tasks/edit-task/edit-task.component";

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'tasks',
        component: TasksComponent,
    },
    {
        path: 'tasks/:id',
        component: TaskComponent,
    },
    {
        path: 'tasks/:id/update',
        component: EditTaskComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}