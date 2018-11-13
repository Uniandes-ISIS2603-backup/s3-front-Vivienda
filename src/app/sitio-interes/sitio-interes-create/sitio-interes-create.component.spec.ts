import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitioInteresCreateComponent } from './sitio-interes-create.component';

describe('SitioInteresCreateComponent', () => {
  let component: SitioInteresCreateComponent;
  let fixture: ComponentFixture<SitioInteresCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitioInteresCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitioInteresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
