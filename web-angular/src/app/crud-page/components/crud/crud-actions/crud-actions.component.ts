import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CrudFactory, GENERIC_CRUD } from 'src/app/crud-page/interfaces/crud-factory';
import { MessageService } from 'src/app/services/message.service';

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
    private messageService: MessageService,
  ) {
  }

  ngOnInit(): void {
  }

  // TODO: implementar controller para essas chamadas e também mostrar mensagens de sucesso e erro caso ocorra
  salvarClick(): void {
    if (!this.isValidForm()) {
      return;
    }
    if (this.crud.record?.id) {
      this.crud.update().subscribe({
        next: () => {
          this.messageService.showMessage('Registro salvo com sucesso.', { type: 'success' });
        }
      });
      return;
    }
    this.crud.create().subscribe({
      next: () => {
        this.messageService.showMessage('Registro salvo com sucesso.', { type: 'success' });
        this.goToNew();
      }
    });
  }

  public cancelarClick(): void {
    this.crud.read(this.crud.record.id).subscribe();
  }

  public excluirClick(): void {
    if (this.solicitarConfirmacao('Deseja excluir mesmo?')) {
      this.crud.delete().subscribe();
    }
  }

  public voltarClick(): void {
    this.voltar();
  }

  public novoClick(): void {
    this.goToNew();
  }

  private goToNew(): void {
    // TODO: fazer reload da rota quando já estiver nela, hoje não ta limpando os campos
    this.router.navigate([`../new`], { relativeTo: this.activatedRoute });
  }

  private goToId(id: any): void {
    this.router.navigate([`../${id}`], { relativeTo: this.activatedRoute });
  }

  public voltar(): void {
    if (this.solicitarConfirmacao('Deseja sair sem salvar as alterações?')) {
      this.goRoutePesquisa();
    }
  }

  public goRoutePesquisa(): void {
    this.router.navigate([`../search`], { relativeTo: this.activatedRoute });
  }

  private solicitarConfirmacao(message: string): boolean {
    return (!this.crud.form.isDirty() || window.confirm(message));
  }

  private isValidForm(): boolean {
    return this.crud.form.validate();
  }

}
