import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { RouterModule, Routes } from '@angular/router';
import { GalleryRoutingModule } from './gallery-routing.module';
import { AppModule } from 'src/app/app.module';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    CoreModule
  ]
})
export class GalleryModule { }
