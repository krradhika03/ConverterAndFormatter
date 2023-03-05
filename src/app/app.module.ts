import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SplitterModule} from 'primeng/splitter';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { ConverterAndFormatterModule } from './converter-and-formatter/converter-and-formatter.module';
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
    ConverterAndFormatterModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
