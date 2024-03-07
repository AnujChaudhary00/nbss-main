import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfraComponent } from './pages/infra/infra.component';
const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: InfraComponent,
                data: {
                    breadcrumb: 'Infra'
                }
            }
        ]
    }
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InfrastructureRoutingModule { }
