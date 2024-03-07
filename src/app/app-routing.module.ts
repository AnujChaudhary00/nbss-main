import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ContactComponent } from './pages/contact-form/contact-form/contact.component';

const routes: Routes = [
  {
    path: 'main',
    component:MainComponent
  },
  {
    path: 'gallery',
    loadChildren: () => import('./modules/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: 'infrastructure',
    loadChildren: () => import('./modules/infrastructure/infrastructure.module').then(m => m.InfrastructureModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'admissions',
    loadChildren: () => import('./modules/admissions/admissions.module').then(m => m.AdmissionsModule)
  },
  {
    path: 'contact-us',
    component:ContactComponent
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
