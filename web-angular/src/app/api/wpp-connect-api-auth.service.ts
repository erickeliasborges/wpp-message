import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WppConnectAPICloseSessionResponse } from "src/app/core/responses/wpp-connect-api-close-session-response";
import { WppConnectAPILogoutSessionResponse } from "src/app/core/responses/wpp-connect-api-logout-session-response";
import { WppConnectAPIStartSessionResponse } from "src/app/core/responses/wpp-connect-api-start-session-response";
import { WppConnectAPIStatusMessageResponse } from "src/app/core/responses/wpp-connect-api-status-message-response";
import { environment } from "src/environments/environment";

@Injectable()
export class WppConnectAPIAuthService {

  /**
 * @description Armazena a url base do sistema
 */
  public baseUrl = environment.api;

  private _fullUrl: string = '';

  constructor(
    public http: HttpClient,
  ) {
    this._fullUrl = `${this.baseUrl}/wpp-connect-api/auth`;
  }

  public startSession(): Observable<WppConnectAPIStartSessionResponse> {
    return this.http.get<WppConnectAPIStartSessionResponse>(`${this._fullUrl}/start-session`);
  }

  public checkConnectionSession(): Observable<WppConnectAPIStatusMessageResponse> {
    return this.http.get<WppConnectAPIStatusMessageResponse>(`${this._fullUrl}/check-connection-session`);
  }

  public closeSession(): Observable<WppConnectAPICloseSessionResponse> {
    return this.http.get<WppConnectAPICloseSessionResponse>(`${this._fullUrl}/close-session`);
  }

  public logoutSession(): Observable<WppConnectAPILogoutSessionResponse> {
    return this.http.get<WppConnectAPILogoutSessionResponse>(`${this._fullUrl}/logout-session`);
  }

}
