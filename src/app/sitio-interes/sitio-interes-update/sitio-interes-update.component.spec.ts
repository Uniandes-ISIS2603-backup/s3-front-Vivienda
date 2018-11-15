import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitioInteresUpdateComponent } from './sitio-interes-update.component';

describe('SitioInteresUpdateComponent', () => {
  let component: SitioInteresUpdateComponent;
  let fixture: ComponentFixture<SitioInteresUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitioInteresUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitioInteresUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
