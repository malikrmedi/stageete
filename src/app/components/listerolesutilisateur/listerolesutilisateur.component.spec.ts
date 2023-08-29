import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerolesutilisateurComponent } from './listerolesutilisateur.component';

describe('ListerolesutilisateurComponent', () => {
  let component: ListerolesutilisateurComponent;
  let fixture: ComponentFixture<ListerolesutilisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListerolesutilisateurComponent]
    });
    fixture = TestBed.createComponent(ListerolesutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
