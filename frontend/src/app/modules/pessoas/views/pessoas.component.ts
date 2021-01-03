import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from '@shared/components/modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html'
})

export class PessoasComponent implements OnInit {

  public searchText: string;
  public apiUrl = '/pessoas'
  public data: any;

  constructor(
    public dialog: MatDialog,
    private apiService: ApiService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.data = await this.apiService.get('pessoas');
  }

  alterarPessoa(p) {
    this.router.navigate([`${this.apiUrl}/${p.id}/alterar`]);
  }

  deletarPessoa(p) {
    const dialogRef = this.dialog.open(ModalConfirmComponent, { width: '360px' });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiService.delete(`${this.apiUrl}/${p.id}`)
        window.location.reload();
      } else {
        return false;
      }
    });
  }

}
