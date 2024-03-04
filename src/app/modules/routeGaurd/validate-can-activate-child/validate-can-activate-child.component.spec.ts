import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateCanActivateChildComponent } from './validate-can-activate-child.component';

describe('ValidateCanActivateChildComponent', () => {
  let component: ValidateCanActivateChildComponent;
  let fixture: ComponentFixture<ValidateCanActivateChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidateCanActivateChildComponent]
    });
    fixture = TestBed.createComponent(ValidateCanActivateChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
