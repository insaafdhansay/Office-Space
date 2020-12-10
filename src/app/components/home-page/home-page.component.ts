import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OfficeModifyComponent } from '../office-modify/office-modify.component';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent {
  constructor(public matDialog: MatDialog) { }

  openOfficeModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = "modal-component";
    dialogConfig.height = "60%";
    dialogConfig.width = "90%";
    const modalDialog = this.matDialog.open(OfficeModifyComponent, dialogConfig);
  }
}