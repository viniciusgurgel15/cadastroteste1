import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <h1>Olá, seja bem vindo!</h1>
    <p>Deseja cadastrar uma nova pessoa ?</p>
    <button mat-stroked-button color="primary" routerLink="/pessoas">Vamos lá!</button>
  `,
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
