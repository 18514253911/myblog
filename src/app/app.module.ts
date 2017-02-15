import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import{HomeComponent} from './home/home.component'
import{CompatibilityComponent} from './compatibility/compatibility.component'
import { appRoutes } from './app.routes';
import {ngFullpageDirective} from './directive/fullpage.directive'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    CompatibilityComponent,
    ngFullpageDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
