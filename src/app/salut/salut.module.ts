import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarumComponent } from './warum/warum.component';
import { SalutRoutingModule } from './salut-routing.module';
import { SalutComponent } from './salut.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SalutComponent, WarumComponent],
  imports: [
    CommonModule,
    SalutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SalutModule { }
