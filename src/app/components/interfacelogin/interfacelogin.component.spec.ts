import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceloginComponent } from './interfacelogin.component';

describe('InterfaceloginComponent', () => {
  let component: InterfaceloginComponent;
  let fixture: ComponentFixture<InterfaceloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfaceloginComponent]
    });
    fixture = TestBed.createComponent(InterfaceloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
