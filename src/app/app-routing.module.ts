import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { ByeComponent } from './bye/bye.component';
import { CiaoComponent } from './ciao/ciao.component';
import { WhyComponent } from './why/why.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component: HelloComponent
  },
  {
    path: 'hello',
    component: HelloComponent
  },
  {
    path: 'bye',
    component: ByeComponent
  },
  {
    path: 'ciao',
    component: CiaoComponent,
    canActivate: [AuthGuard],
    children:[
      {path:'', redirectTo: 'why', pathMatch: 'full'},
      { path: 'why', component: WhyComponent}
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
