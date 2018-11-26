import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadDetailComponent } from './universidad-detail.component';

describe('UniversidadDetailComponent', () => {
  let component: UniversidadDetailComponent;
  let fixture: ComponentFixture<UniversidadDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversidadDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversidadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
