import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StaffModifyComponent } from '../staff-modify/staff-modify.component';
import { RemoveComponent } from '../remove/remove.component';
import { Observable } from 'rxjs';
import { StaffService } from './../../services/staff.service';
import { OfficeService } from './../../services/office.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-staff-card',
  templateUrl: './staff-card.component.html',
  styleUrls: ['./staff-card.component.scss'],
})
export class StaffCardComponent {
  staffSearchVal: string;
  staffMembers: Observable<any[]>;
  staffMembersFiltered: Observable<any[]>;
  officeDocID: string;

  constructor(
    public matDialog: MatDialog,
    public staffService: StaffService,
    public officeService: OfficeService
  ) {
    staffService.nameChange.subscribe((value) => {
      this.staffSearchVal = value;
      this.searchStaff();
    });
  }

  ngOnInit(): void {
    this.officeDocID = this.officeService.docID;
    this.getStaffCardData(this.officeDocID);
    this.staffSearchVal = this.staffService.searchVal;
  }
  getStaffCardData(officeDocID) {
    this.staffMembers = this.staffService.getStaff(officeDocID);
  }
  searchStaff() {
    this.staffMembers = this.staffMembers.pipe(
      map((members) =>
        members.filter((member) => {
          return member.payload.doc
            .data()
            .firstName.toLowerCase()
            .includes(this.staffSearchVal);
        })
      )
    );
  }

  openStaffModal(data) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = 'modal-component';
    dialogConfig.height = '60%';
    dialogConfig.width = '90%';
    dialogConfig.data = {
      title: 'Edit',
      firstName: data.payload.doc.data().firstName,
      lastName: data.payload.doc.data().lastName,
      staffMemberID: data.payload.doc.data().id,
      staffDocID: data.payload.doc.id,
    };

    this.matDialog.open(StaffModifyComponent, dialogConfig);
  }

  openRemoveModal(data) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = 'modal-component';
    dialogConfig.height = '30%';
    dialogConfig.width = '90%';
    dialogConfig.data = {
      docID: data.payload.doc.id,
      name:
        data.payload.doc.data().firstName +
        ' ' +
        data.payload.doc.data().lastName,
      modify: 'Staff',
    };
    this.matDialog.open(RemoveComponent, dialogConfig);
  }
}
