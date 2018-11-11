import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitioInteresListComponent } from './sitio-interes-list.component';

describe('SitioInteresListComponent', () => {
  let component: SitioInteresListComponent;
  let fixture: ComponentFixture<SitioInteresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitioInteresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitioInteresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
