import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisitsComponent } from './add-visits.component';

describe('AddVisitsComponent', () => {
  let component: AddVisitsComponent;
  let fixture: ComponentFixture<AddVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVisitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
