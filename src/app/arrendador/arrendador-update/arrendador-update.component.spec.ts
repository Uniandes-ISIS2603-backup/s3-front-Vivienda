import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendadorUpdateComponent } from './arrendador-update.component';

describe('ArrendadorUpdateComponent', () => {
  let component: ArrendadorUpdateComponent;
  let fixture: ComponentFixture<ArrendadorUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrendadorUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrendadorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
