import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OfficeCardComponent } from './components/office-card/office-card.component';
import { OfficePageComponent } from './components/office-page/office-page.component';

const routes: Routes = [  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
