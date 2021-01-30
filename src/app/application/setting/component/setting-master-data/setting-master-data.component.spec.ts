import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingMasterDataComponent } from './setting-master-data.component';

describe('SettingMasterDataComponent', () => {
  let component: SettingMasterDataComponent;
  let fixture: ComponentFixture<SettingMasterDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingMasterDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingMasterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
