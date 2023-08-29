import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarutilisateurComponent } from './navbarutilisateur.component';

describe('NavbarutilisateurComponent', () => {
  let component: NavbarutilisateurComponent;
  let fixture: ComponentFixture<NavbarutilisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarutilisateurComponent]
    });
    fixture = TestBed.createComponent(NavbarutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
