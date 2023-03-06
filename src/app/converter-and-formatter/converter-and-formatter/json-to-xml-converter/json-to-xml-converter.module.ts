import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonToXmlConverterComponent } from './json-to-xml-converter/json-to-xml-converter.component';
import { SplitterModule } from 'primeng/splitter';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [JsonToXmlConverterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    SplitterModule,
    InputTextareaModule,
    FormsModule ,
    CommonModule
  ],
  exports :[
    JsonToXmlConverterComponent
  ]
})
export class JsonToXmlConverterModule { }
