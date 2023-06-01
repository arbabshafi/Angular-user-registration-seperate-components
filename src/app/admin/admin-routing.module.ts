import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminloginComponent} from './adminlogin/adminlogin.component';
import {AdminlistComponent} from './adminlist/adminlist.component'

const routes: Routes = [
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminlist',component:AdminlistComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}