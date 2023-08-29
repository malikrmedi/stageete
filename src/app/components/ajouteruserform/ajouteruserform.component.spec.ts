import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteruserformComponent } from './ajouteruserform.component';

describe('AjouteruserformComponent', () => {
  let component: AjouteruserformComponent;
  let fixture: ComponentFixture<AjouteruserformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouteruserformComponent]
    });
    fixture = TestBed.createComponent(AjouteruserformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
