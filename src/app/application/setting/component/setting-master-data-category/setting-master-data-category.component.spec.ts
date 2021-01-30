import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingMasterDataCategoryComponent } from './setting-master-data-category.component';

describe('SettingMasterDataCategoryComponent', () => {
  let component: SettingMasterDataCategoryComponent;
  let fixture: ComponentFixture<SettingMasterDataCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingMasterDataCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingMasterDataCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
