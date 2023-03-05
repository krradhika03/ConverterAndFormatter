import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterAndFormatterComponent } from './converter-and-formatter/converter-and-formatter.component';
import { JsonToXmlConverterModule } from './converter-and-formatter/json-to-xml-converter/json-to-xml-converter.module';
import { SplitterModule } from 'primeng/splitter';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConverterAndFormatterComponent
  ],
  imports: [
    JsonToXmlConverterModule,
    SplitterModule,
    InputTextareaModule,
    FormsModule ,
    CommonModule

  ],
  exports :[
    ConverterAndFormatterComponent
  ]
})
export class ConverterAndFormatterModule { }
