import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonToXmlConverterComponent } from './json-to-xml-converter/json-to-xml-converter.component';
import { SplitterModule } from 'primeng/splitter';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [JsonToXmlConverterComponent],
  imports: [
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
