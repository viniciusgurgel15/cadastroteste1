import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoasComponent } from './views/pessoas.component';
import { PessoaFormComponent } from './components/form/pessoa-form.component';

const routes: Routes = [
  { path: '', component: PessoasComponent },
  { path: 'novo', component: PessoaFormComponent },
  {
    path: ':id', children: [
      { path: 'alterar', component: PessoaFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PessoasRoutingModule { }
