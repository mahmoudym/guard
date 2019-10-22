import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarumComponent } from './warum/warum.component';
import { SalutComponent } from './salut.component';

const routes: Routes = [{ path: '', component: SalutComponent,
children:[
  {path:'warum', component: WarumComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalutRoutingModule { }
