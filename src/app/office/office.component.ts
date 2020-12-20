import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OfficeModifyComponent } from '../components/office-modify/office-modify.component';
import { RemoveComponent } from '../components/remove/remove.component';
import { StaffModifyComponent } from '../components/staff-modify/staff-modify.component';
import { OfficeService } from '../services/office.service';


@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})


export class OfficeComponent {
  constructor(public matDialog: MatDialog,public officeService: OfficeService, ) { 

  }

  
 openStaffModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = "modal-component";
    dialogConfig.height = "60%";
    dialogConfig.width = "90%";
    dialogConfig.data = {
      title: 'Add',
      OfficeDocID: this.officeService.docID,
    
 
     
    };
     
  
    const modalDialog = this.matDialog.open(StaffModifyComponent, dialogConfig);
  } 

  
}