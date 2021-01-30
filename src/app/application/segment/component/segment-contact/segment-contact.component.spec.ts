import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentContactComponent } from './segment-contact.component';

describe('SegmentContactComponent', () => {
  let component: SegmentContactComponent;
  let fixture: ComponentFixture<SegmentContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
