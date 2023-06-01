import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular//forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsertableComponent } from './usertable/usertable.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'usertable', component: UsertableComponent },
  { path: 'login', component: LoginComponent },
  { path: 'update', component: RegisterComponent },
  {path:"admin",loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
  {path:"student",loadChildren:()=>import('./student/student.module').then(mod=>mod.StudentModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
