import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StaffModifyComponent } from '../staff-modify/staff-modify.component';
import { RemoveComponent } from '../remove/remove.component';

@Component({
  selector: 'app-staff-card',
  templateUrl: './staff-card.component.html',
  styleUrls: ['./staff-card.component.scss']
})

export class StaffCardComponent {
  constructor(public matDialog: MatDialog) { }

  openStaffModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = "modal-component";
    dialogConfig.height = "60%";
    dialogConfig.width = "90%";
    const modalDialog = this.matDialog.open(StaffModifyComponent, dialogConfig);
  }

  openRemoveModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = "modal-component";
    dialogConfig.height = "30%";
    dialogConfig.width = "90%";
    const modalDialog = this.matDialog.open(RemoveComponent, dialogConfig);
  }
}