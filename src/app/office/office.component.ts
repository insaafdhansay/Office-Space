import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OfficeModifyComponent } from '../components/office-modify/office-modify.component';
import { RemoveComponent } from '../components/remove/remove.component';


@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})


export class OfficeComponent {
  constructor(public matDialog: MatDialog) { }

  openOfficeModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = "modal-component";
    dialogConfig.height = "60%";
    dialogConfig.width = "90%";
    const modalDialog = this.matDialog.open(OfficeModifyComponent, dialogConfig);
  }

  openRemoveModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = "modal-component";
    dialogConfig.height = "30%";
    dialogConfig.width = "90%";
    const modalDialog = this.matDialog.open(RemoveComponent, dialogConfig);
  }
}