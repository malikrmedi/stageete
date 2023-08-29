import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedemandesComponent } from './listedemandes.component';

describe('ListedemandesComponent', () => {
  let component: ListedemandesComponent;
  let fixture: ComponentFixture<ListedemandesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListedemandesComponent]
    });
    fixture = TestBed.createComponent(ListedemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
