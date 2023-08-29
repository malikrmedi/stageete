import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedemandedemandeurComponent } from './listedemandedemandeur.component';

describe('ListedemandedemandeurComponent', () => {
  let component: ListedemandedemandeurComponent;
  let fixture: ComponentFixture<ListedemandedemandeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListedemandedemandeurComponent]
    });
    fixture = TestBed.createComponent(ListedemandedemandeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
