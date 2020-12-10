import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StaffModifyComponent } from '../staff-modify/staff-modify.component';



@Component({
  selector: 'app-office-page',
  templateUrl: './office-page.component.html',
  styleUrls: ['./office-page.component.scss']
})

export class OfficePageComponent {
  constructor(public matDialog: MatDialog) { }

  openStaffModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = "modal-component";
    dialogConfig.height = "60%";
    dialogConfig.width = "90%";
    const modalDialog = this.matDialog.open(StaffModifyComponent, dialogConfig);
  }

  
}