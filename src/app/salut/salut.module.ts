import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarumComponent } from './warum/warum.component';
import { SalutRoutingModule } from './salut-routing.module';
import { SalutComponent } from './salut.component';


@NgModule({
  declarations: [SalutComponent, WarumComponent],
  imports: [
    CommonModule,
    SalutRoutingModule
  ]
})
export class SalutModule { }
