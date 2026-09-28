import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinevotinglistComponent } from './onlinevotinglist.component';

describe('OnlinevotinglistComponent', () => {
  let component: OnlinevotinglistComponent;
  let fixture: ComponentFixture<OnlinevotinglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlinevotinglistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlinevotinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
