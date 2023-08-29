import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarddemandeurComponent } from './dashboarddemandeur.component';

describe('DashboarddemandeurComponent', () => {
  let component: DashboarddemandeurComponent;
  let fixture: ComponentFixture<DashboarddemandeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboarddemandeurComponent]
    });
    fixture = TestBed.createComponent(DashboarddemandeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
