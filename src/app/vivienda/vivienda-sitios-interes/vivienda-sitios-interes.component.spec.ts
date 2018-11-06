import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViviendaSitiosInteresComponent} from './vivienda-sitios-interes.component';

describe('ViviendaSitiosInteresComponent', () => {
  let component: ViviendaSitiosInteresComponent;
  let fixture: ComponentFixture<ViviendaSitiosInteresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViviendaSitiosInteresComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViviendaSitiosInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
