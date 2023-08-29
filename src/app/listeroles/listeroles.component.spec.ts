import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerolesComponent } from './listeroles.component';

describe('ListerolesComponent', () => {
  let component: ListerolesComponent;
  let fixture: ComponentFixture<ListerolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListerolesComponent]
    });
    fixture = TestBed.createComponent(ListerolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
