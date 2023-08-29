import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedemanderesponsableComponent } from './listedemanderesponsable.component';

describe('ListedemanderesponsableComponent', () => {
  let component: ListedemanderesponsableComponent;
  let fixture: ComponentFixture<ListedemanderesponsableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListedemanderesponsableComponent]
    });
    fixture = TestBed.createComponent(ListedemanderesponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
