import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';

//import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    //routing
  ],
  declarations : [
    AppComponent,

  ],
  providers : [
    
  ],
  bootstrap:[
    AppComponent
  ]
})

export class AppModule {}