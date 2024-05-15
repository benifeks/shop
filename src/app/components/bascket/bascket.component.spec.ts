import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BascketComponent } from './bascket.component';

describe('BascketComponent', () => {
  let component: BascketComponent;
  let fixture: ComponentFixture<BascketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BascketComponent]
    });
    fixture = TestBed.createComponent(BascketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
