import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfficeService } from './../../services/office.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss'],
})
export class RemoveComponent implements OnInit {
  docID: string;
  name:string;

  constructor(
    private router: Router,
    public officeService: OfficeService,
    public dialogRef: MatDialogRef<RemoveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.docID = data.docID;
    this.name=data.officeName;


  }

  ngOnInit(): void {}

  removeOffice(){
    this.officeService.deleteOffice(this.docID)
  .then(
    res => {
      this.router.navigate(['/home']);
    },
    err => {
      console.log(err);
    }
  )


  }
}
