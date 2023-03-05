import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonToXmlConverterComponent } from './json-to-xml-converter.component';

describe('JsonToXmlConverterComponent', () => {
  let component: JsonToXmlConverterComponent;
  let fixture: ComponentFixture<JsonToXmlConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonToXmlConverterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonToXmlConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
