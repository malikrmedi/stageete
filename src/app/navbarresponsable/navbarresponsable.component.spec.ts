import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarresponsableComponent } from './navbarresponsable.component';

describe('NavbarresponsableComponent', () => {
  let component: NavbarresponsableComponent;
  let fixture: ComponentFixture<NavbarresponsableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarresponsableComponent]
    });
    fixture = TestBed.createComponent(NavbarresponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
