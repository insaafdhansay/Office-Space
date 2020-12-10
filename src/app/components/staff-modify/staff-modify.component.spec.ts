import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffModifyComponent } from './staff-modify.component';

describe('StaffModifyComponent', () => {
  let component: StaffModifyComponent;
  let fixture: ComponentFixture<StaffModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
