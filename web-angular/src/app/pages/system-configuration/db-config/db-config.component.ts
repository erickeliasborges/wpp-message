import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValueLabel } from 'src/app/core/models/value-label';
import { DbConfigService } from 'src/app/pages/system-configuration/db-config/db-config.service';
import { getDbConfigTypeLabelsValues } from 'src/app/pages/system-configuration/db-config/enums/db-config-type';
import { DbConfig } from 'src/app/pages/system-configuration/db-config/models/db-config';
import { MessageService } from 'src/app/common/services/message.service';
import { LoadingService } from 'src/app/common/components/loading-indicator/loading.service';

@Component({
  selector: 'app-db-config',
  templateUrl: './db-config.component.html',
  styleUrls: ['./db-config.component.css']
})
export class DbConfigComponent {

  public form!: FormGroup;
  public dbConfigTypes: ValueLabel[] = getDbConfigTypeLabelsValues();

  constructor(
    public formBuilder: FormBuilder,
    private dbConfigService: DbConfigService,
    private messageService: MessageService,
    private dialog: Dialog,
    private loadingService: LoadingService,
  ) {
    this.form = this.createForm();
    this.load();
  }

  private createForm(): FormGroup<any> {
    return this.formBuilder.group({
      id: [null],
      type: [null, Validators.required],
      host: [null, Validators.required],
      port: [null, Validators.required],
      name: [null, Validators.required],
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  private load(): void {
    this.dbConfigService.default().subscribe({
      next: (value) => this.updateForm(value),
      error: (error) => this.messageService.showHttpErrorMessage('Erro ao carregar registro.', error),
    })
  }

  public save(): void {
    if (!this.validateForm()) {
      return;
    }
    this.loadingService.loadingOn();
    this.dbConfigService.create(this.form.getRawValue()).subscribe({
      next: (value) => {
        this.loadingService.loadingOff();
        this.messageService.showMessage('Registro salvo com sucesso.', { type: 'success' });
        this.updateForm(value);
        this.dialog.closeAll();
      },
      error: (error) => {
        this.loadingService.loadingOff();
        this.messageService.showHttpErrorMessage('Erro ao salvar registro.', error);
      },
    });
  }

  private validateForm(): boolean {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
    return this.form.valid;
  }

  private updateForm(value: DbConfig): void {
    this.form.reset(value);
  }

  public onConnectionTestClick(): void {
    this.loadingService.loadingOn();
    this.dbConfigService.connectionTest(this.form.getRawValue()).subscribe({
      next: (value) => {
        this.loadingService.loadingOff();
        this.messageService.showMessage(value.message, { type: ((value.httpStatus == 200) ? 'success' : 'error') });
      },
      error: (error) => {
        this.loadingService.loadingOff();
        this.messageService.showHttpErrorMessage('Erro ao testar conexão com o banco de dados.', error);
      },
    })
  }

}
