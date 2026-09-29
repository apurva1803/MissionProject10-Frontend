import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooddeliverylistComponent } from './fooddeliverylist.component';

describe('FooddeliverylistComponent', () => {
  let component: FooddeliverylistComponent;
  let fixture: ComponentFixture<FooddeliverylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooddeliverylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooddeliverylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
