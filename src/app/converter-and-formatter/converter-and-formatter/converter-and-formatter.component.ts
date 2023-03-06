import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

interface City {
  name: string,
  code: string
}
@Component({
  selector: 'converter-and-formatter',
  templateUrl: './converter-and-formatter.component.html',
  styleUrls: ['./converter-and-formatter.component.css']
})
export class ConverterAndFormatterComponent {
  lang = [
    { name: "JSON TO XML" },
    { name: "XML TO JSON" },
  ];
}
