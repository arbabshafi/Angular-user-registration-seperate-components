import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentloginComponent} from './studentlogin/studentlogin.component';
import {StudentlistComponent} from './studentlist/studentlist.component'

const routes: Routes = [
  {path:'studentlogin',component:StudentloginComponent},
  {path:'studentlist',component:StudentlistComponent},
];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class StudentRoutingModule{}