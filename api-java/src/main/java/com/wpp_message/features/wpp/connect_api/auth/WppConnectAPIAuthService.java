package com.wpp_message.features.wpp.connect_api.auth;

import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.WebApplicationException;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

/**
 * Endpoints para interagir com os métodos de autenticação da API do wppconnect-server
 * https://github.com/wppconnect-team/wppconnect-server
 */
@RegisterRestClient(configKey = "wppconnect-api")
public interface WppConnectAPIAuthService {

    @POST
    @Path(WppConnectAPIAuthServiceHandle.SESSION + "/{secretKey}/generate-token")
    WppConnectAPITokenResponse generateToken(@PathParam("secretKey") String secretKey) throws WebApplicationException;

}
