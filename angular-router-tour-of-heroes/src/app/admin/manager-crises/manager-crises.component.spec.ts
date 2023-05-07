import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerCrisesComponent } from './manager-crises.component';

describe('ManagerCrisesComponent', () => {
  let component: ManagerCrisesComponent;
  let fixture: ComponentFixture<ManagerCrisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerCrisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerCrisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
