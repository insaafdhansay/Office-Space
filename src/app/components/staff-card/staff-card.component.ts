import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StaffModifyComponent } from '../staff-modify/staff-modify.component';
import { RemoveComponent } from '../remove/remove.component';
import { Observable } from 'rxjs';
import { StaffService } from './../../services/staff.service';
import { OfficeService } from './../../services/office.service';



@Component({
  selector: 'app-staff-card',
  templateUrl: './staff-card.component.html',
  styleUrls: ['./staff-card.component.scss'],
})
export class StaffCardComponent {
  staffMembers: Observable<any[]>;
  officeDocID:string;
  constructor(public matDialog: MatDialog,public staffService: StaffService,public officeService: OfficeService) {}
  ngOnInit(): void {

    this.officeDocID= this.officeService.docID  
      this.getStaffCardData(this.officeDocID);

  }
  getStaffCardData(officeDocID) {
    
    this.staffMembers = this.staffService.getStaff(officeDocID);
    

  }

  openStaffModal(data) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = 'modal-component';
    dialogConfig.height = '60%';
    dialogConfig.width = '90%';
    dialogConfig.data = {
      title: 'Edit',
      firstName: data.payload.doc.data().firstName,
      lastName:data.payload.doc.data().lastName,
     staffMemberID:data.payload.doc.data().id,
      staffDocID:data.payload.doc.id
      
      

    };
    
    const modalDialog = this.matDialog.open(StaffModifyComponent, dialogConfig);
  }

  openRemoveModal(data) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = 'modal-component';
    dialogConfig.height = '30%';
    dialogConfig.width = '90%';
    dialogConfig.data = {
      docID: data.payload.doc.id,
      name: data.payload.doc.data().firstName+" "+data.payload.doc.data().lastName,
      modify:"Staff"

    };
    const modalDialog = this.matDialog.open(RemoveComponent, dialogConfig);
  }
}
