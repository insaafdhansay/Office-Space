import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OfficeModifyComponent } from '../components/office-modify/office-modify.component';
import { RemoveComponent } from '../components/remove/remove.component';
import { StaffModifyComponent } from '../components/staff-modify/staff-modify.component';


@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})


export class OfficeComponent {
  constructor(public matDialog: MatDialog) { }

 openStaffModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = "modal-component";
    dialogConfig.height = "60%";
    dialogConfig.width = "90%";
    const modalDialog = this.matDialog.open(StaffModifyComponent, dialogConfig);
  } 

  
}