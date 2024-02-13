import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateCanactivateComponent } from './validate-canactivate.component';

describe('ValidateCanactivateComponent', () => {
  let component: ValidateCanactivateComponent;
  let fixture: ComponentFixture<ValidateCanactivateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidateCanactivateComponent]
    });
    fixture = TestBed.createComponent(ValidateCanactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
