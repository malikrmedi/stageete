import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardresponsableComponent } from './dashboardresponsable.component';

describe('DashboardresponsableComponent', () => {
  let component: DashboardresponsableComponent;
  let fixture: ComponentFixture<DashboardresponsableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardresponsableComponent]
    });
    fixture = TestBed.createComponent(DashboardresponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
