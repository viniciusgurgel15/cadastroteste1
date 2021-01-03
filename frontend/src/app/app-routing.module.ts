import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateComponent } from './template/template.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', children: [
    {
      path: '', component: TemplateComponent, children: [
        { path: '', component: DashboardComponent },
        {
          path: 'pessoas',
          loadChildren: () => import('./modules/pessoas/pessoas.module').then(m => m.PessoasModule)
        }
      ]
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
