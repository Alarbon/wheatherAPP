import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './wheather/pages/main-page/main-page.component';
import { AdvancedDetailsComponent } from './wheather/pages/advanced-details/advanced-details.component';

const routes: Routes = [
  {
    path:'inicio',
    component: MainPageComponent
  },
  {
    path: 'informacion-detallada',
    component: AdvancedDetailsComponent
  },
  {
    path: '**',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
