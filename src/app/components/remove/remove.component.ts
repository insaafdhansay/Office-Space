import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfficeService } from './../../services/office.service';
import { StaffService } from './../../services/staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss'],
})
export class RemoveComponent implements OnInit {
  docID: string;
  modify: string;
  name: string;

  constructor(
    private router: Router,
    public officeService: OfficeService,
    public staffService: StaffService,
    public dialogRef: MatDialogRef<RemoveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.docID = data.docID;
    this.name = data.name;
    this.modify = data.modify;
  }

  ngOnInit(): void {}

  remove() {
    if (this.modify == 'Office') {
      
      this.removeOffice();
    } else {
      this.removeStaffMember();
    }
  }

  removeOffice() {
    this.officeService.deleteOffice(this.docID).then(
      res => {
        this.router.navigate(['/home']);
      },
      err => {
        console.log(err);
      }
    );
  }
  removeStaffMember() {
    console.log("removing staff member"+this.modify+this.docID+this.name)
    this.staffService.deleteStaffMember(this.docID);
  }
}
