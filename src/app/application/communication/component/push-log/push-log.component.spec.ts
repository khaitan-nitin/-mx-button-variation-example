import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushLogComponent } from './push-log.component';

describe('PushLogComponent', () => {
  let component: PushLogComponent;
  let fixture: ComponentFixture<PushLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
