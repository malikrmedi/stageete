import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeproduitsComponent } from './listeproduits.component';

describe('ListeproduitsComponent', () => {
  let component: ListeproduitsComponent;
  let fixture: ComponentFixture<ListeproduitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeproduitsComponent]
    });
    fixture = TestBed.createComponent(ListeproduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
