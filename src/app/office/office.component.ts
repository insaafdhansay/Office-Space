import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OfficeModifyComponent } from '../components/office-modify/office-modify.component';
import { RemoveComponent } from '../components/remove/remove.component';
import { StaffModifyComponent } from '../components/staff-modify/staff-modify.component';
import { OfficeService } from '../services/office.service';
import { StaffService } from '../services/staff.service';
import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss'],
})
export class OfficeComponent {
  staffMembers: Observable<any[]>;
  staffSearched: Observable<any[]>;
  officeDocID: string;
  searchValue: string = '';

  constructor(
    public matDialog: MatDialog,
    public officeService: OfficeService,
    public staffService: StaffService
  ) {
    this.officeDocID = this.officeService.docID;
    this.getStaffCardData(this.officeDocID);
  }

  getStaffCardData(officeDocID) {
    //this.staffMembers = this.staffService.getStaff(officeDocID);
  }

  searchByName() {
    let value = this.searchValue.toLowerCase();
/** this.staffSearched = this.staffService
      .searchStaff(value, this.officeDocID)
      */
     this.staffService.searchValSet(value)
     


  }
  openStaffModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = 'modal-component';
    dialogConfig.height = '60%';
    dialogConfig.width = '90%';
    dialogConfig.data = {
      title: 'Add',
      OfficeDocID: this.officeService.docID,
    };

    const modalDialog = this.matDialog.open(StaffModifyComponent, dialogConfig);
  }
}
