import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelExampleComponent } from './label-example.component';

describe('LabelExampleComponent', () => {
  let component: LabelExampleComponent;
  let fixture: ComponentFixture<LabelExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
