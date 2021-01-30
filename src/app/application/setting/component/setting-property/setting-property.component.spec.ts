import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingPropertyComponent } from './setting-property.component';

describe('SettingPropertyComponent', () => {
  let component: SettingPropertyComponent;
  let fixture: ComponentFixture<SettingPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
