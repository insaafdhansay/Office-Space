import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { StaffService } from './../../services/staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-modify',
  templateUrl: './staff-modify.component.html',
  styleUrls: ['./staff-modify.component.scss'],
})
export class StaffModifyComponent implements OnInit {
  title: string;
  staffForm: FormGroup;
  OfficeDocID: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public staffService: StaffService,
    public dialogRef: MatDialogRef<StaffModifyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title;
    this.OfficeDocID = data.OfficeDocID;
  }


  ngOnInit(): void {
    if (this.title == 'Add') {
      this.createForm();
    } else {
      this.editForm();
    }
  
  }
  createForm() {

    this.staffForm = this.fb.group({
      firstName: [''],
      lastName: [''],
    });
  }
  editForm() {
    this.staffForm = this.fb.group({
      //  firstName: [this.name],
      //  lastName: [this.address],
    });
  }
  onSubmit() {
    if (this.title == 'Add') {
      this.onSubmitAdd();
    } else {
      //this.onSubmitEdit();
    }
  } 

 onSubmitAdd() {

    this.staffService
      .addStaffMember(this.staffForm.value,this.OfficeDocID )
      .then((res) => {
        this.router.navigate(['/office']);
        console.log(this.OfficeDocID)
      });
  }
  /**onSubmitEdit() {
    this.staffService.updateOffice(this.staffForm.value)
  .then(
    res => {
      this.router.navigate(['/home']);
    }
  )

  } */
   
}
