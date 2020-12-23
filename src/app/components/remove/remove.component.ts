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
      this.dialogRef.close()
    } else {
      this.removeStaffMember();
      this.dialogRef.close()
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
    this.staffService.deleteStaffMember(this.docID);
  }
}
