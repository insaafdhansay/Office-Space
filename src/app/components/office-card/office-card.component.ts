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
 /**   officeID:string;
  officeName:string;
  officeEmail:string;
  officeTel:string;
  OfficeMaxOcc:number;
  officeCol:string;
  officeAddress:string;
  officeDocID:string;*/ 


  

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

  openOfficeModal(data) {
    /**     this.officeID = data.payload.doc.data().id;
    this.officeName = data.payload.doc.data().name;
    this.officeAddress = data.payload.doc.data().address;
    this.officeEmail = data.payload.doc.data().email;
    this.officeTel = data.payload.doc.data().tel;
    this.OfficeMaxOcc = data.payload.doc.data().maxOcc;
    this.officeCol = data.payload.doc.data().officeCol;
    this.officeDocID = data.payload.doc.id;*/

    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = 'modal-component';
    dialogConfig.height = '60%';
    dialogConfig.width = '90%';
    dialogConfig.data={
      title:"Edit",
      officeID: data.payload.doc.data().id,
      name:data.payload.doc.data().name,
      address:data.payload.doc.data().address,
      tel:data.payload.doc.data().tel,
      email:data.payload.doc.data().email,
      maxOcc: data.payload.doc.data().maxOcc,
      colour:data.payload.doc.data().officeCol,
      docID:data.payload.doc.id,
      

    }
    
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
  getOfficeChosen(data){
  
  
   
}


}
