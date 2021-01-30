import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxExampleComponent } from './text-box-example.component';

describe('TextBoxExampleComponent', () => {
  let component: TextBoxExampleComponent;
  let fixture: ComponentFixture<TextBoxExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBoxExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBoxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
