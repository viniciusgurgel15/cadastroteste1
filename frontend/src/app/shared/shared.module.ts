import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { NullPipe } from './pipes/null.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { TableFilterPipe } from './pipes/table-filter.pipe';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';

@NgModule({
  declarations: [
    NullPipe,
    CustomDatePipe,
    TableFilterPipe,
    ModalConfirmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NullPipe,
    CustomDatePipe,
    TableFilterPipe,
    ModalConfirmComponent
  ],
  providers: [
    NullPipe,
    CustomDatePipe,
    TableFilterPipe
  ]
})

export class SharedModule { }
