import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OfficeModifyComponent } from '../office-modify/office-modify.component';
import { RemoveComponent } from '../remove/remove.component';



@Component({
  selector: 'app-office-card',
  templateUrl: './office-card.component.html',
  styleUrls: ['./office-card.component.scss']
})

export class OfficeCardComponent {
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