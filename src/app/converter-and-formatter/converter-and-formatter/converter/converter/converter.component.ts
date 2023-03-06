import { Component, OnInit } from '@angular/core';
import * as JsonToXML from "js2xmlparser";

interface Format {
  name: string,
  code: string
}

@Component({
  selector: 'converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  array: [] = [];
  sourceText: any;
  finalText: any;
  title = 'formatter';

  selectedFormat: Format;
  lang = [
    { name: "JSON TO XML" },
    { name: "XML TO JSON" },
  ];

  ngOnInit(): void {
  }


  changeDropdownValue() {
    this.finalText = '';
    if (this.selectedFormat && this.selectedFormat.name == 'JSON TO XML') {
      console.log('test');
      console.log(this.lang);
      console.log(this.selectedFormat);
      if (this.sourceText) {
        this.finalText = JsonToXML.parse("data", JSON.parse(this.sourceText));
      }
    }

  }

}
