import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViviendaEditComponent } from './vivienda-edit.component';

describe('ViviendaEditComponent', () => {
  let component: ViviendaEditComponent;
  let fixture: ComponentFixture<ViviendaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViviendaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViviendaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
