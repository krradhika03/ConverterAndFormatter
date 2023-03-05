import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterAndFormatterComponent } from './converter-and-formatter.component';

describe('ConverterAndFormatterComponent', () => {
  let component: ConverterAndFormatterComponent;
  let fixture: ComponentFixture<ConverterAndFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverterAndFormatterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConverterAndFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
