import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { PessoasComponent } from './views/pessoas.component';
import { PessoaFormComponent } from './components/form/pessoa-form.component';

@NgModule({
  declarations: [
    PessoasComponent,
    PessoaFormComponent
  ],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    SharedModule
  ]
})

export class PessoasModule { }
