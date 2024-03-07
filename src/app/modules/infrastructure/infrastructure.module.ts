import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfraComponent } from './pages/infra/infra.component';
import { InfrastructureRoutingModule } from './infrastructure-routing.module';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    InfraComponent
  ],
  imports: [
    CommonModule,
    InfrastructureRoutingModule,
    CoreModule
  ]
})
export class InfrastructureModule { }
