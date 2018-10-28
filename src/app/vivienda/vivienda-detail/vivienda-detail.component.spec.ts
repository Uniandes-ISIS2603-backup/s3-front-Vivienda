import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViviendaDetailComponent } from './vivienda-detail.component';

describe('ViviendaDetailComponent', () => {
  let component: ViviendaDetailComponent;
  let fixture: ComponentFixture<ViviendaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViviendaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViviendaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
