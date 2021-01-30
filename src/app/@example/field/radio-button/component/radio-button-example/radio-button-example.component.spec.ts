import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonExampleComponent } from './radio-button-example.component';

describe('RadioButtonExampleComponent', () => {
  let component: RadioButtonExampleComponent;
  let fixture: ComponentFixture<RadioButtonExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioButtonExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
