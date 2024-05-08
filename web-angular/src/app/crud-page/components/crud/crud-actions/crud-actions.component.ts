import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CrudFactory, GENERIC_CRUD } from 'src/app/crud-page/interfaces/crud-factory';

@Component({
  selector: 'app-crud-actions',
  templateUrl: './crud-actions.component.html',
  styleUrls: ['./crud-actions.component.scss']
})
export class CrudActionsComponent implements OnInit {

  constructor(
    @Inject(GENERIC_CRUD) public crud: CrudFactory<any>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  // TODO: implementar controller para essas chamadas e também mostrar mensagens de sucesso e erro caso ocorra
  salvarClick() {
    return this.crud.create().subscribe();
  }

  public cancelarClick() {
    return this.crud.read(this.crud.record.id).subscribe();
  }

  public excluirClick() {
    return this.crud.delete().subscribe();
  }

  public voltarClick() {
    this.voltar();
  }

  public novoClick() {
    this.router.navigate([`../new`], { relativeTo: this.activatedRoute });
  }

  public voltar() {
    if (this.solicitarConfirmacaoSair()) {
      this.goRoutePesquisa();
    }
  }

  public goRoutePesquisa() {
    this.router.navigate([`../search`], { relativeTo: this.activatedRoute });
  }

  public solicitarConfirmacaoSair(): boolean {
    return (!this.crud.form.isDirty() || window.confirm('Deseja sair sem salvar as alterações?'));
  }

}
