import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceadminComponent } from './interfaceadmin.component';

describe('InterfaceadminComponent', () => {
  let component: InterfaceadminComponent;
  let fixture: ComponentFixture<InterfaceadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfaceadminComponent]
    });
    fixture = TestBed.createComponent(InterfaceadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
