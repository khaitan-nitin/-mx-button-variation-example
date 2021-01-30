import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsSenderIdComponent } from './sms-sender-id.component';

describe('SmsSenderIdComponent', () => {
  let component: SmsSenderIdComponent;
  let fixture: ComponentFixture<SmsSenderIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsSenderIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsSenderIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
