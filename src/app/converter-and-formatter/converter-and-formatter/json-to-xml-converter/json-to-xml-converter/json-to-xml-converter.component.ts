import { Component,OnInit } from '@angular/core';
import * as JsonToXML from "js2xmlparser";


@Component({
  selector: 'json-to-xml-converter',
  templateUrl: './json-to-xml-converter.component.html',
  styleUrls: ['./json-to-xml-converter.component.css']
})
export class JsonToXmlConverterComponent implements OnInit {

  array: [] = [];
  sourceText: any;
  finalText: any;
  title = 'formatter';

  ngOnInit(): void {
  }

  getValue() {
    this.finalText = JsonToXML.parse("data", JSON.parse(this.sourceText));
  }

}
