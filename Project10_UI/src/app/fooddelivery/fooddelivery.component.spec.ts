import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooddeliveryComponent } from './fooddelivery.component';

describe('FooddeliveryComponent', () => {
  let component: FooddeliveryComponent;
  let fixture: ComponentFixture<FooddeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooddeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooddeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
