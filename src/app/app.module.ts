import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SplitterModule} from 'primeng/splitter';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { JsonToXmlConverterModule } from './json-to-xml-converter/json-to-xml-converter.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SplitterModule,
    InputTextareaModule,
    FormsModule ,
    JsonToXmlConverterModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
