import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitterModule } from 'primeng/splitter';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { ConverterComponent } from './converter/converter.component';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [ConverterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    SplitterModule,
    InputTextareaModule,
    FormsModule ,
    CommonModule,
    NgxSpinnerModule
  ],
  exports :[
    ConverterComponent
  ]
})
export class ConverterModule { }
