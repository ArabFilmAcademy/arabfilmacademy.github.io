import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativeCategoryComponent } from './initiative-category.component';

describe('InitiativeCategoryComponent', () => {
  let component: InitiativeCategoryComponent;
  let fixture: ComponentFixture<InitiativeCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InitiativeCategoryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiativeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
