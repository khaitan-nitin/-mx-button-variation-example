import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushChannelComponent } from './push-channel.component';

describe('PushChannelComponent', () => {
  let component: PushChannelComponent;
  let fixture: ComponentFixture<PushChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
