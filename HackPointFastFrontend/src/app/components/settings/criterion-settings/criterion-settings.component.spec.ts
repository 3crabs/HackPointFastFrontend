import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriterionSettingsComponent } from './criterion-settings.component';

describe('CriterionSettingsComponent', () => {
  let component: CriterionSettingsComponent;
  let fixture: ComponentFixture<CriterionSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriterionSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriterionSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
