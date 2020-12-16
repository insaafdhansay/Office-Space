import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { OfficeService } from '../services/office.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-office-modify',
  templateUrl: './office-modify.component.html',
  styleUrls: ['./office-modify.component.scss'],
})
export class OfficeModifyComponent implements OnInit {
  constructor(public officeService: OfficeService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit(value) {
    this.officeService.createUser(value).then((res) => {
      this.router.navigate(['/home']);
    });
  }
}
