import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConverterAndFormatterComponent } from './converter-and-formatter/converter-and-formatter.component';
import { JsonToXmlConverterModule } from './converter-and-formatter/json-to-xml-converter/json-to-xml-converter.module';
import { SplitterModule } from 'primeng/splitter';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    ConverterAndFormatterComponent
  ],
  bootstrap: [ConverterAndFormatterComponent],
  imports: [
    DropdownModule,
    FormsModule,
    JsonToXmlConverterModule,
    SplitterModule,
    InputTextareaModule,
    CommonModule,
    DropdownModule,
  ],
  exports :[
    ConverterAndFormatterComponent
  ]
})
export class ConverterAndFormatterModule { }
