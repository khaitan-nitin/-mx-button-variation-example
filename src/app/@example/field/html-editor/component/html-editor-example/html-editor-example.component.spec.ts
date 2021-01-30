import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlEditorExampleComponent } from './html-editor-example.component';

describe('HtmlEditorExampleComponent', () => {
  let component: HtmlEditorExampleComponent;
  let fixture: ComponentFixture<HtmlEditorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlEditorExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlEditorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
