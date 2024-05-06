package com.wpp_message.features.wpp.connect_api.auth;

import com.wpp_message.features.wpp.connect_api.auth.requests.WppConnectAPIStartSessionRequest;
import com.wpp_message.features.wpp.connect_api.auth.responses.*;
import io.quarkus.rest.client.reactive.NotBody;
import jakarta.ws.rs.*;
import org.eclipse.microprofile.rest.client.annotation.ClientHeaderParam;
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

    @POST
    @Path(WppConnectAPIAuthServiceHandle.SESSION + "/start-session")
    @ClientHeaderParam(name = "Authorization", value = "Bearer {token}")
    WppConnectAPIStartSessionResponse startSession(WppConnectAPIStartSessionRequest request, @NotBody String token) throws WebApplicationException;

    @GET
    @Path(WppConnectAPIAuthServiceHandle.SESSION + "/check-connection-session")
    @ClientHeaderParam(name = "Authorization", value = "Bearer {token}")
    WppConnectAPICheckConnectionSessionResponse checkConnectionSession(@NotBody String token) throws WebApplicationException;

    @POST
    @Path(WppConnectAPIAuthServiceHandle.SESSION + "/close-session")
    @ClientHeaderParam(name = "Authorization", value = "Bearer {token}")
    WppConnectAPICloseSessionResponse closeSession(@NotBody String token) throws WebApplicationException;

    @POST
    @Path(WppConnectAPIAuthServiceHandle.SESSION + "/logout-session")
    @ClientHeaderParam(name = "Authorization", value = "Bearer {token}")
    WppConnectAPILogoutSessionResponse logoutSession(@NotBody String token) throws WebApplicationException;

}
