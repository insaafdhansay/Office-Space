import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OfficeModifyComponent } from '../components/office-modify/office-modify.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public matDialog: MatDialog) {}

  openOfficeModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = 'modal-component';
    dialogConfig.height = '60%';
    dialogConfig.width = '90%';

    dialogConfig.data = {
      title: 'Add',
    };

    this.matDialog.open(OfficeModifyComponent, dialogConfig);
  }
}
