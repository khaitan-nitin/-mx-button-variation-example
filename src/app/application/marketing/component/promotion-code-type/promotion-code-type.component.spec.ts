import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionCodeTypeComponent } from './promotion-code-type.component';

describe('PromotionCodeTypeComponent', () => {
  let component: PromotionCodeTypeComponent;
  let fixture: ComponentFixture<PromotionCodeTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionCodeTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionCodeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
