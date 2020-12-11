import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OfficePageComponent } from './components/office-page/office-page.component';




const routes: Routes = [  {
  path: 'home',
  component: HomePageComponent
},
{
  path: 'office',
  component: OfficePageComponent
},
  { path: 'office', loadChildren: () => import('./office/office.module').then(m => m.OfficeModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
