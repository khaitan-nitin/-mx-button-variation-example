import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphExampleComponent } from './paragraph-example.component';

describe('ParagraphExampleComponent', () => {
  let component: ParagraphExampleComponent;
  let fixture: ComponentFixture<ParagraphExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
