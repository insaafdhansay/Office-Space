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
  firstName: string;
  lastName: string;
  staffMemberID: string;
  staffDocID: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public staffService: StaffService,
    public dialogRef: MatDialogRef<StaffModifyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title;
    this.OfficeDocID = data.OfficeDocID;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.staffMemberID = data.staffMemberID;
    this.staffDocID = data.staffDocID;
  }

  ngOnInit(): void {
    if (this.title == 'Add') {
      this.createForm();
    } else {
      this.editForm();
    }
  }
  /**
   * Creates empty form for adding staff member
   */
  createForm() {
    this.staffForm = this.fb.group({
      firstName: [''],
      lastName: [''],
    });
  }
  /**
   * Populated form for editing staff member details
   */
  editForm() {
    this.staffForm = this.fb.group({
      firstName: [this.firstName],
      lastName: [this.lastName],
    });
  }
  /**
   * On submit handler for editing and adding staff members
   */
  onSubmit() {
    if (this.title == 'Add') {
      this.onSubmitAdd();
      this.dialogRef.close();
    } else {
      this.onSubmitEdit();
      this.dialogRef.close();
    }
  }
  /**
   * Sending the staff member details to the staff servive to be added to the database 
   */
  onSubmitAdd() {
    this.staffService.addStaffMember(this.staffForm.value, this.OfficeDocID);
  }
   /**
   * Sending the staff member details to the staff servive to be updated in the database 
   */
  onSubmitEdit() {
    this.staffService.updateStaffMember(this.staffDocID, this.staffForm.value);
  }
}
