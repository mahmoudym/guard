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
import {FetchserviceService} from './fetchservice.service';
import {HttpClientModule,HttpHeaders} from "@angular/common/http";
import { FilterPipe } from './filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { GameComponent } from './game/game.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ByeComponent,
    CiaoComponent,
    WhyComponent,
    LoginComponent,
    FilterPipe,
    RegisterComponent,
    GameComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,AuthGuard,FetchserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
