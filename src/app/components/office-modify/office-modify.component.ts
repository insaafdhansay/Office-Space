import { Component, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { OfficeService } from './../../services/office.service';
import { Router } from '@angular/router';
import { MatSelectChange } from '@angular/material/select';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-office-modify',
  templateUrl: './office-modify.component.html',
  styleUrls: ['./office-modify.component.scss'],
})
export class OfficeModifyComponent implements OnInit {
  officeForm: FormGroup;
  selectedColour: string = 'black';
  title: string;
  officeID: string;
  name: string;
  email: string;
  tel: string;
  maxOcc: number;
  colour: string;
  address: string;
  docID: string;

  constructor(
    public officeService: OfficeService,
    private router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<OfficeModifyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title;
    this.name = data.name;
    this.email = data.email;
    this.address = data.address;
    this.tel = data.tel;
    this.maxOcc = data.maxOcc;
    this.colour = data.colour;
    this.docID = data.docID;
    this.officeID = data.officeID;
  }

  ngOnInit(): void {
    if (this.title == 'Add') {
      this.createForm();
    } else {
      this.editForm();
    }
  }

  createForm() {
    this.officeForm = this.fb.group({
      name: [''],
      address: [''],
      email: [''],
      tel: [''],
      maxOcc: [''],
      officeCol: [''],
    });
  }
  editForm() {
    this.officeForm = this.fb.group({
      name: [this.name],
      address: [this.address],
      email: [this.email],
      tel: [this.tel],
      maxOcc: [this.maxOcc],
      officeCol: [this.colour], //setting isnt working
    });
  }
  selectedValue(event: MatSelectChange) {
    this.selectedColour = event.source.triggerValue;
    console.log(this.selectedColour);
  }
  onSubmit() {
    if (this.title == 'Add') {
      this.onSubmitAdd();
    } else {
      this.onSubmitEdit();
    }
  }
  onSubmitAdd() {
    this.officeService
      .addOffice(this.officeForm.value, this.selectedColour)
      .then((res) => {
        this.router.navigate(['/home']);
      });
  }
  onSubmitEdit() {
    this.officeService.updateOffice(this.docID, this.officeForm.value)
  .then(
    res => {
      this.router.navigate(['/home']);
    }
  )

  }
  
}
