import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinevotingComponent } from './onlinevoting.component';

describe('OnlinevotingComponent', () => {
  let component: OnlinevotingComponent;
  let fixture: ComponentFixture<OnlinevotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlinevotingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlinevotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
