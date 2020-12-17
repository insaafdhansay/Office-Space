import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { OfficeService } from './../../services/office.service';
import { Router } from '@angular/router';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-office-modify',
  templateUrl: './office-modify.component.html',
  styleUrls: ['./office-modify.component.scss'],
})
export class OfficeModifyComponent implements OnInit {
  officeForm: FormGroup;
  selectedColour: string = "black";
 
  constructor(
    public officeService: OfficeService,
    private router: Router,
    private fb: FormBuilder,
   
    
    
  ) {}

  ngOnInit(): void {
    this.createForm();
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
  selectedValue(event: MatSelectChange) {
    this.selectedColour = event.source.triggerValue;
    console.log(this.selectedColour);
    
  }
  onSubmit() {
    console.log("called ")
    this.officeService
      .addOffice(this.officeForm.value,this.selectedColour)
      .then((res) => {
        this.router.navigate(['/home']);
      });
  }
}
