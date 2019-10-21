import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ByeComponent } from './bye/bye.component';
import { CiaoComponent } from './ciao/ciao.component';
import { WhyComponent } from './why/why.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ByeComponent,
    CiaoComponent,
    WhyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
