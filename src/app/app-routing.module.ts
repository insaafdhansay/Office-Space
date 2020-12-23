import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';





const routes: Routes = [  /* {
  path: 'home',
  component: HomePageComponent
},*/
 
/**{
  path: 'office',
  component: OfficePageComponent
}, */

  { path: 'office/:id', loadChildren: () => import('./office/office.module').then(m => m.OfficeModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
