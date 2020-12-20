import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeRoutingModule } from './office-routing.module';
import { OfficeComponent } from './office.component';
import { StaffCardComponent } from '../components/staff-card/staff-card.component';
import { MatIconModule } from '@angular/material/icon';
import { StaffModifyComponent } from '../components/staff-modify/staff-modify.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OfficeComponent, StaffCardComponent, StaffModifyComponent],
  imports: [
    CommonModule,
    OfficeRoutingModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class OfficeModule {}
