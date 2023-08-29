import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbardemandeurComponent } from './navbardemandeur.component';

describe('NavbardemandeurComponent', () => {
  let component: NavbardemandeurComponent;
  let fixture: ComponentFixture<NavbardemandeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbardemandeurComponent]
    });
    fixture = TestBed.createComponent(NavbardemandeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
