import { Component, Inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CrudFactory, GENERIC_CRUD } from 'src/app/crud-page/interfaces/crud-factory';

@Component({
  selector: 'app-crud-actions',
  templateUrl: './crud-actions.component.html',
  styleUrls: ['./crud-actions.component.scss']
})
export class CrudActionsComponent {

  @Input() createAndNew: boolean = true;

  constructor(
    @Inject(GENERIC_CRUD) public crud: CrudFactory<any>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  public onSaveClick(): void {
    if (!this.isValidForm()) {
      return;
    }
    if (this.crud.record?.id) {
      this.crud.update().subscribe({
        next: () => this.readById(),
      });
      return;
    }
    this.crud.create().subscribe({
      next: () => {
        if (this.createAndNew) {
          this.new();
        } else {
          this.readById();
        }
      },
    });
  }

  public onCancelClick(): void {
    if (!this.requestConfirmationConsideringDirty('Você possui alterações pendentes, deseja mesmo cancelar?')) {
      return;
    }
    if (this.crud.record?.id) {
      this.readById();
      return;
    }
    this.new();
  }

  private readById(): void {
    this.router.navigate([`../${this.crud.record.id}`], { relativeTo: this.activatedRoute }).then((value) => {
      const forceActionIfSameRoute = !value;
      if (forceActionIfSameRoute) {
        this.crud.read(this.crud.record.id).subscribe();
      }
    });
  }

  public onDeleteClick(): void {
    if (this.requestConfirmation('Deseja mesmo excluir?')) {
      this.crud.delete().subscribe({
        next: () => this.new(),
      });
    }
  }

  public onBackClick(): void {
    this.goBackToSearch();
  }

  public onNewClick(): void {
    if (this.requestConfirmationConsideringDirty('Você possui alterações pendentes, deseja mesmo iniciar um novo registro?')) {
      this.new();
    }
  }

  private new(): void {
    // TODO: revisar forma melhor de forçar o evento quando já estiver na rota (o onSameUrlNavigation: 'reload' não funcionou)
    this.router.navigate([`../new`], { relativeTo: this.activatedRoute }).then((value) => {
      const forceActionIfSameRoute = !value;
      if (forceActionIfSameRoute) {
        this.crud.newObj(this.activatedRoute.snapshot.queryParams).subscribe();
      }
    });
  }

  public goBackToSearch(): void {
    if (this.requestConfirmationConsideringDirty('Deseja sair sem salvar as alterações?')) {
      this.goRoutePesquisa();
    }
  }

  public goRoutePesquisa(): void {
    this.router.navigate([`../search`], { relativeTo: this.activatedRoute });
  }

  private requestConfirmation(message: string): boolean {
    return window.confirm(message);
  }

  private requestConfirmationConsideringDirty(message: string): boolean {
    return (!this.crud.form.isDirty() || window.confirm(message));
  }

  private isValidForm(): boolean {
    return this.crud.form.validate();
  }

}
