import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRowHoverComponent } from './message-row-hover.component';

describe('MessageRowHoverComponent', () => {
  let component: MessageRowHoverComponent;
  let fixture: ComponentFixture<MessageRowHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageRowHoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageRowHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
