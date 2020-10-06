import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { StudentComponent } from './views/student/student.component'
import { StudentCreateComponent } from './components/student/student-create/student-create.component'
import { StudentUpdateComponent } from './components/student/student-update/student-update.component';
import { StudentDeleteComponent } from './components/student/student-delete/student-delete.component';
const routes: Routes = [{
  path: "",
  component: HomeComponent

}, {
  path: "students",
  component: StudentComponent
}, {
  path: "students/create",
  component: StudentCreateComponent
},
{
  path: "students/update/:id",
  component: StudentUpdateComponent
},
{
  path: "students/delete/:id",
  component: StudentDeleteComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
