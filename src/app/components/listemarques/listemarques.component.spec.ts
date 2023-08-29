import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemarquesComponent } from './listemarques.component';

describe('ListemarquesComponent', () => {
  let component: ListemarquesComponent;
  let fixture: ComponentFixture<ListemarquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListemarquesComponent]
    });
    fixture = TestBed.createComponent(ListemarquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
