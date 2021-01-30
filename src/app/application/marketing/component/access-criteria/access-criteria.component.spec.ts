import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessCriteriaComponent } from './access-criteria.component';

describe('AccessCriteriaComponent', () => {
  let component: AccessCriteriaComponent;
  let fixture: ComponentFixture<AccessCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
