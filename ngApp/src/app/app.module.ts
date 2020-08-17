import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'events', component: EventsComponent},
  {path: 'special', component: SpecialEventsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: '', redirectTo: 'events', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
