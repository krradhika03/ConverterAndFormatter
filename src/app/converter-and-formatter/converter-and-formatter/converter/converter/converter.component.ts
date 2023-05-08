import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as JsonToXML from "js2xmlparser";
import { NgxSpinnerService } from "ngx-spinner";
import { take } from 'rxjs';

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
  shipToAddress: any;
  billingInfo: any;
  trackingNumber: any;
  invalidImage: any;
  trackingConfidenceValue: any;
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

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async waitUntilImageDataPresent(fileName: string) {
    let result = await this.getImageData(fileName);
    return result;
  }
  upload() {
    this.invalidImage = null;
    this.trackingNumber = null;
    this.shipToAddress = null;
    this.billingInfo = null;
    //    const file: File = event.target.files[0];
    if (this.fileName) {
      // this.fileName = JSON.parse(JSON.stringify(this.file.filename));
      const formData = new FormData();
      formData.append("thumbnail", this.file);
      const httpOptions = {
        headers: new HttpHeaders({

          "ContentType": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",



        })
      }
      this.SpinnerService.show();
      this.http.post<String>("https://us-central1-visionapidemo-381801.cloudfunctions.net/processUploadLabel", formData, httpOptions).subscribe(async result => {
        if (result) {
          var count = 1;
          var dbData;
          do {
            if (count > 1) {
              await this.delay(10000);
            }
            dbData = await this.waitUntilImageDataPresent(this.fileName);
            count++;
          } while (dbData == null || count > 5);

          this.SpinnerService.hide();
          result = dbData;
          if (dbData) {
            if (dbData.blockData) {
              let indexTrack = dbData.blockData.findIndex(e => e.labelText.includes("TRACKING"));
              let indexship = dbData.blockData.findIndex(e => e.labelText.includes("SHIP TO"));
              let indexUPSText = dbData.blockData.findIndex(e => e.labelText.includes("UPS"));
              let indexBillingInfo = dbData.blockData.findIndex(e => e.labelText.includes("BILLING"));

              if (indexTrack > -1 && indexship > -1 && indexUPSText > -1) {

                this.shipToAddress = this.findIndexWithLongestLength(dbData.blockData, indexship, indexTrack);
                if (this.shipToAddress) {
                  this.shipToAddress = this.shipToAddress.replace("SHIP", "");
                  this.shipToAddress = this.shipToAddress.replace("TO", "");
                }

                this.trackingNumber = dbData.blockData[indexTrack].labelText.split("#")[1];
                this.trackingConfidenceValue = dbData.blockData[indexTrack].confidence;
                if (indexBillingInfo != -1) {
                  this.billingInfo = dbData.blockData[indexBillingInfo].labelText.split("BILLING")[1];
                }
                if (this.shipToAddress == null || this.shipToAddress == undefined) {
                  this.invalidImage = "Invalid image";
                } else if ((this.trackingConfidenceValue * 100) < 95) {
                  this.shipToAddress = null;
                  this.trackingNumber = null;
                  this.invalidImage = "Uploaded image is not clear, please upload proper image";
                }
              } else {
                this.invalidImage = "Invalid image";
              }

            } else {
              this.invalidImage = "Invalid image";
            }
          }
        }
      });
    }
  }

  onUpload(event: any) {
    this.invalidImage = null;
    this.trackingNumber = null;
    this.shipToAddress = null;
    this.file = event.target.files[0];
    this.fileName = event.target.files[0].name;
    //add validation

  }
  getImageData(fileName: string): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "ContentType": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",

      })
    }
    return this.http.post<any>("https://us-central1-visionapidemo-381801.cloudfunctions.net/imageData", fileName.toUpperCase(), httpOptions).pipe(take(1)).toPromise();
  }

  findIndexWithLongestLength(blockData, shipindex, indexTrack): any {

    let tempData: string[] = [];
    blockData.forEach((element, index) => {
      if (index > shipindex && index < indexTrack) {
        tempData.push(element.labelText);
      }

    });
    return tempData ? tempData.sort(function (a, b) { return b.length - a.length })[0] :null;

  }
}




