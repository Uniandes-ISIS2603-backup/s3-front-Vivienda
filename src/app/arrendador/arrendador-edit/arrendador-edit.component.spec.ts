import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendadorEditComponent } from './arrendador-edit.component';

describe('ArrendadorUpdateComponent', () => {
  let component: ArrendadorEditComponent;
  let fixture: ComponentFixture<ArrendadorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrendadorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrendadorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
