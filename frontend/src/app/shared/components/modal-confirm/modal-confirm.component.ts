import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html'
})

export class ModalConfirmComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalConfirmComponent>
  ) { }

  ngOnInit() { }

}
