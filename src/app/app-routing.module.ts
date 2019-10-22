import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { ByeComponent } from './bye/bye.component';
import { CiaoComponent } from './ciao/ciao.component';
import { WhyComponent } from './why/why.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { CrisisDetailResolverService } from './crisis-center/crisis-detail-resolver.service';
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
      { path: 'why', component: WhyComponent,
        resolve: { games: CrisisDetailResolverService }
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'salut', loadChildren: './salut/salut.module#SalutModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
