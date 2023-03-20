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
    { name: "Excel TO JSON" },
    { name: "JSON TO EXCEL" },
    { name: "XML TO EXCEL" },
    { name: "EXCEL TO XML" },
    { name: "CSV TO JSON" },
    { name: "JSON TO CSV" }
  ];

  ngOnInit(): void {
  }


  changeDropdownValue() {
    this.finalText = '';
    if (this.selectedFormat) {
      if (this.sourceText) {
        switch (this.selectedFormat.name) {
          case 'JSON TO XML':
            {
              this.finalText = JsonToXML.parse("data", JSON.parse(this.sourceText));
              break;
            }
          case 'XML TO JSON':
            {
              break;
            }
          default : {
            break;
          }
        }
      }
    }

  }

}
