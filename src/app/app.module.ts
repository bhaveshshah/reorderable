import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReorderabeComponent } from './reorderabe/reorderabe.component';


@NgModule({
  declarations: [
    AppComponent,
    ReorderabeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
