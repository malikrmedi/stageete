import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemotifsComponent } from './listemotifs.component';

describe('ListemotifsComponent', () => {
  let component: ListemotifsComponent;
  let fixture: ComponentFixture<ListemotifsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListemotifsComponent]
    });
    fixture = TestBed.createComponent(ListemotifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
