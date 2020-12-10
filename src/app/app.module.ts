import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OfficeCardComponent } from './components/office-card/office-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OfficePageComponent } from './components/office-page/office-page.component';
import { StaffCardComponent } from './components/staff-card/staff-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { OfficeModifyComponent } from './components/office-modify/office-modify.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RemoveComponent } from './components/remove/remove.component';
import { StaffModifyComponent } from './components/staff-modify/staff-modify.component';

@NgModule({
  declarations: [
    AppComponent,
    OfficeCardComponent,
    HomePageComponent,
    OfficePageComponent,
    StaffCardComponent,
    OfficeModifyComponent,
    RemoveComponent,
    StaffModifyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
