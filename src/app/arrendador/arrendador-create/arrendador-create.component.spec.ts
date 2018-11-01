import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendadorCreateComponent } from './arrendador-create.component';

describe('ArrendadorCreateComponent', () => {
  let component: ArrendadorCreateComponent;
  let fixture: ComponentFixture<ArrendadorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrendadorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrendadorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
