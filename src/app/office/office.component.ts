import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OfficeModifyComponent } from '../components/office-modify/office-modify.component';
import { RemoveComponent } from '../components/remove/remove.component';
import { StaffModifyComponent } from '../components/staff-modify/staff-modify.component';
import { OfficeService } from '../services/office.service';
import { StaffService } from '../services/staff.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss'],
})
export class OfficeComponent {
  staffMembers: Observable<any[]>;
  staffArr: any[];
  staffSearched: Observable<any[]>;
  officeDocID: string;
  searchValue: string = '';
  numStaff: number;

  constructor(
    public matDialog: MatDialog,
    public officeService: OfficeService,
    public staffService: StaffService
  ) {
    this.officeDocID = this.officeService.docID;
    this.getStaffNum(this.officeDocID);
  }
  /**
   * Setting the number of staff currently belonging to the office.
   * @param officeDocID
   */
  getStaffNum(officeDocID) {
    this.staffMembers = this.staffService.getStaff(officeDocID);
    this.staffMembers.subscribe(
      (staff: any) => {
        const staffData = staff.map((s) => {
          return s.payload.doc.data();
        });
        this.staffArr = staffData;
        this.numStaff = this.staffArr.length;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  /**
   * Updating the search value in staffService on each new keystroke.
   */
  searchByName() {
    let value = this.searchValue.toLowerCase();

    this.staffService.searchValSet(value);
  }
  /**
   *  Opens the add staff modal (staffModify component) on the click of the add staff button, passing the title 'add'as data
   */
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
