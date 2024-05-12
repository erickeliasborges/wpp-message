import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable, of } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable()
export abstract class CrudAPIService<T> {

  /**
   * @description Armazena a url base do sistema
   */
  public baseUrl = environment.api;

  private fullUrl: string = '';

  constructor(
    @Inject('url') public url: string,
    public http: HttpClient,
  ) {
    this.fullUrl = this.baseUrl + (this.url.startsWith('/') ? '' : '/') + this.url;
  }

  /**
   * @description Retorna um novo registro (T)
   */
  public new(args?: any): Observable<any> {
    return of({});
  }

  /**
   * @description Inclui o novo registro
   * @returns Void
   * @param record Registro da inclusão
   */
  public create(record: T): Observable<T> {
    return this.http.post<T>(`${this.fullUrl}`, record);
  }

  /**
   * @description Atualiza o registro
   * @returns Void
   * @param record Registro da atualização
   */
  public update(record: T): Observable<T> {
    return this.http.put<T>(`${this.fullUrl}`, record);
  }

  /**
   * @description Pesquisa todos os registros do objeto
   * @returns Vetor com todos os registro do objeto
   */
  public findAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.fullUrl}`);
  }

  /**
   * @description Busca o registro pelo id
   * @returns Registro correspondente ao id (ou null)
   * @param id Identificador do registro
   */
  public findById(id: number): Observable<T> {
    return this.http.get<T>(`${this.fullUrl}/${id}`);
  }

  /**
   * @description Deleta o registro pelo id
   * @returns Void
   * @param id Identificador do registro
   */
  public delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.fullUrl}/${id}`);
  }

}
