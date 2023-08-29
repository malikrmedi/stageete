import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterdemandeformComponent } from './ajouterdemandeform.component';

describe('AjouterdemandeformComponent', () => {
  let component: AjouterdemandeformComponent;
  let fixture: ComponentFixture<AjouterdemandeformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterdemandeformComponent]
    });
    fixture = TestBed.createComponent(AjouterdemandeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
