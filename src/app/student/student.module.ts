import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentlistComponent } from './studentlist/studentlist.component';


@NgModule({
  declarations: [
    StudentloginComponent,
    StudentlistComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
