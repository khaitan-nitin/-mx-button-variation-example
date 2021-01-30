import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiImageExampleComponent } from './multi-image-example.component';

describe('MultiImageExampleComponent', () => {
  let component: MultiImageExampleComponent;
  let fixture: ComponentFixture<MultiImageExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiImageExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiImageExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
