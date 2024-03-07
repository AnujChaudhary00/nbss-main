import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionsComponent } from './admissions.component';
import { AdmissionsRoutingModule } from './admissions-routing.module';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    AdmissionsComponent
  ],
  imports: [
    CommonModule,
    AdmissionsRoutingModule,
    CoreModule
  ]
})
export class AdmissionsModule { }
