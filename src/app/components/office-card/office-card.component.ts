import { Component, OnInit,Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OfficeModifyComponent } from '../office-modify/office-modify.component';
import { RemoveComponent } from '../remove/remove.component';
import { OfficeService } from './../../services/office.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-office-card',
  templateUrl: './office-card.component.html',
  styleUrls: ['./office-card.component.scss'],
})
export class OfficeCardComponent implements OnInit {

  offices: Observable<any[]>;

  

  constructor(
    public matDialog: MatDialog,
    public officeService: OfficeService,
    private router:Router
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
    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = 'modal-component';
    dialogConfig.height = '60%';
    dialogConfig.width = '90%';
    dialogConfig.data = {
      title: 'Edit',
      officeID: data.payload.doc.data().id,
      name: data.payload.doc.data().name,
      address: data.payload.doc.data().address,
      tel: data.payload.doc.data().tel,
      email: data.payload.doc.data().email,
      maxOcc: data.payload.doc.data().maxOcc,
      colour: data.payload.doc.data().officeCol,
      docID: data.payload.doc.id,
    };

    const modalDialog = this.matDialog.open(
      OfficeModifyComponent,
      dialogConfig
    );
  }

  openRemoveModal(data) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = 'modal-component';
    dialogConfig.height = '30%';
    dialogConfig.width = '90%';
    dialogConfig.data = {
      docID: data.payload.doc.id,
      name: data.payload.doc.data().name,
      modify:"Office"
    };
    const modalDialog = this.matDialog.open(RemoveComponent, dialogConfig);
  }
  setOffice(data) {
    this.officeService.setOfficeDetails(
      data.payload.doc.data(),
      data.payload.doc.id
  
    );   
  

    this.router.navigate(['office',data.payload.doc.data().id]);

  }
}
