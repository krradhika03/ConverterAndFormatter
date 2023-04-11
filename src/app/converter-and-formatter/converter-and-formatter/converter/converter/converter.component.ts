import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as JsonToXML from "js2xmlparser";
import { NgxSpinnerService } from "ngx-spinner";  

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
  fileName = '';
  array: [] = [];
  sourceText: any;
  finalText: any;
  title = 'formatter';
  file: File = null;

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
  validList: any;
  invalidList: any;
  constructor(public http: HttpClient, private SpinnerService: NgxSpinnerService) {

  }

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
              var parseString = require('xml2js').parseString;
              var xml: any;
              parseString(this.sourceText, function (err, result) {
                xml = JSON.stringify(result, null, 2);
              });
              this.finalText = xml;
              break;
            }
          default: {
            break;
          }
        }
      }
    }

  }

  upload() {
    console.log('test');
//    const file: File = event.target.files[0];
    if (this.file) {
      this.fileName = this.file.name;
      const formData = new FormData();
      formData.append("thumbnail", this.file);
      const httpOptions = {
        headers: new HttpHeaders({

          "ContentType": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"

        })
      }
    this.SpinnerService.show();
     this.http.post<any>("https://us-central1-visionapidemo-381801.cloudfunctions.net/processUploadLabel", formData, httpOptions).
      subscribe(res=>{
          if(res)
          {
            this.validList= res.valid;
            this.invalidList = res.invalid;
          }
          this.SpinnerService.hide();
      });
    }
    }

    onUpload(event:any)
    {
      
    this.file= event.target.files[0];
   
    }
}
