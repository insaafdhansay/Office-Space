import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeModifyComponent } from './office-modify.component';

describe('OfficeModifyComponent', () => {
  let component: OfficeModifyComponent;
  let fixture: ComponentFixture<OfficeModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
