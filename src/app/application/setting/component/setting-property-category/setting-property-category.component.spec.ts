import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingPropertyCategoryComponent } from './setting-property-category.component';

describe('SettingPropertyCategoryComponent', () => {
  let component: SettingPropertyCategoryComponent;
  let fixture: ComponentFixture<SettingPropertyCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingPropertyCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingPropertyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
