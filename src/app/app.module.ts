import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SplitterModule} from 'primeng/splitter';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { ConverterAndFormatterModule } from './converter-and-formatter/converter-and-formatter.module';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    SplitterModule,
    InputTextareaModule,
    ConverterAndFormatterModule,
  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
