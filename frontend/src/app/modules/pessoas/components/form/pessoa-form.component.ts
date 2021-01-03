import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '@services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html'
})

export class PessoaFormComponent implements OnInit {

  public submitted = false;
  public disableBtnSave = false;
  public apiUrl = 'pessoas';
  public formPessoa: FormGroup;
  public enableParceiro: boolean;
  public pageTitle: string;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.pageTitle = "Editar pessoa"
        this.showForm(params['id']);
      } else {
        this.pageTitle = "Nova pessoa"
        this.formPessoa = this.fb.group({
          nome: ['', [Validators.required, Validators.minLength(5)]],
          dtnascimento: ['', [Validators.required]],
          estadocivil: ['', [Validators.required]],
          nomeparceiro: [''],
          dtnascimentoparceiro: ['']
        });
      }
    });
  }

  showForm(id) {
    this.apiService.get(`${this.apiUrl}/${id}`).then(success => {
      this.formPessoa = this.fb.group({
        id: [success.id],
        nome: [success.nome, [Validators.required, Validators.minLength(5)]],
        dtnascimento: [success.dtnascimento, [Validators.required]],
        estadocivil: [success.estadocivil, [Validators.required]],
        nomeparceiro: [success.nomeparceiro],
        dtnascimentoparceiro: [success.dtnascimentoparceiro]
      });
      this.possuiParceiro(success.estadocivil);
    });
  }

  get f() {
    return this.formPessoa.controls;
  }

  possuiParceiro(e) {
    if (e === '1') {
      this.enableParceiro = true;
      this.f.nomeparceiro.setValidators([Validators.required, Validators.minLength(5)]);
      this.f.nomeparceiro.updateValueAndValidity();
      this.f.dtnascimentoparceiro.setValidators([Validators.required]);
      this.f.dtnascimentoparceiro.updateValueAndValidity();
    } else {
      this.enableParceiro = false;
      this.f.nomeparceiro.clearValidators();
      this.f.nomeparceiro.updateValueAndValidity();
      this.f.dtnascimentoparceiro.clearValidators();
      this.f.dtnascimentoparceiro.updateValueAndValidity();
    }
  }

  onSave() {
    this.submitted = true;
    if (this.formPessoa.valid) {
      this.disableBtnSave = true;
      this.route.params.subscribe(params => {
        if (params['id']) {
          this.update(this.formPessoa.getRawValue());
        } else {
          this.create(this.formPessoa.getRawValue());
        }
      });
    }
  }

  create(formValues) {
    this.apiService.post(this.apiUrl, formValues)
      .then(() => this.router.navigate([`/pessoas`]))
      .catch(data => console.log(data));
  }

  update(formValues) {
    this.apiService.patch(`${this.apiUrl}/${formValues.id}`, formValues)
      .then(() => this.router.navigate([`/pessoas`]))
      .catch(data => console.log(data));
  }

  cancel() {
    this.router.navigate(['/pessoas']);
  }

}
