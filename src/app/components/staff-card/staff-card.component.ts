import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StaffModifyComponent } from '../staff-modify/staff-modify.component';
import { RemoveComponent } from '../remove/remove.component';
import { Observable } from 'rxjs';
import { StaffService } from './../../services/staff.service';

@Component({
  selector: 'app-staff-card',
  templateUrl: './staff-card.component.html',
  styleUrls: ['./staff-card.component.scss'],
})
export class StaffCardComponent {
  staffMembers: Observable<any[]>;
  constructor(public matDialog: MatDialog,public staffService: StaffService) {}
  ngOnInit(): void {
    this.getStaffCardData();
  }
  getStaffCardData() {
    
    this.staffMembers = this.staffService.getStaff();

  }

  openStaffModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = 'modal-component';
    dialogConfig.height = '60%';
    dialogConfig.width = '90%';
    dialogConfig.data = {
      title: 'Edit',
      //officeID: data.payload.doc.data().id,
      // name: data.payload.doc.data().name,
    };
    const modalDialog = this.matDialog.open(StaffModifyComponent, dialogConfig);
  }

  openRemoveModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = 'modal-component';
    dialogConfig.height = '30%';
    dialogConfig.width = '90%';

    const modalDialog = this.matDialog.open(RemoveComponent, dialogConfig);
  }
}
