import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OfficeModifyComponent } from '../office-modify/office-modify.component';
import { RemoveComponent } from '../remove/remove.component';
import { OfficeService } from './../../services/office.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-office-card',
  templateUrl: './office-card.component.html',
  styleUrls: ['./office-card.component.scss'],
})
export class OfficeCardComponent  implements OnInit  {
  offices: Observable<any[]>;
  

  constructor(
    public matDialog: MatDialog,
    public officeService: OfficeService
  ) {}

  ngOnInit(): void {
    this.getOfficeData();
  }
  getOfficeData() {
    /**  this.officeService.getOffices().subscribe((result) => {
      this.offices = result;
    }); */

    this.offices = this.officeService.getOffices();
    //this.officeService.getOffices().subscribe(res =>(this.offices = res));
  
  }

  openOfficeModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = 'modal-component';
    dialogConfig.height = '60%';
    dialogConfig.width = '90%';
    const modalDialog = this.matDialog.open(
      OfficeModifyComponent,
      dialogConfig
    );
  }

  openRemoveModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = 'modal-component';
    dialogConfig.height = '30%';
    dialogConfig.width = '90%';
    const modalDialog = this.matDialog.open(RemoveComponent, dialogConfig);
  }
}
