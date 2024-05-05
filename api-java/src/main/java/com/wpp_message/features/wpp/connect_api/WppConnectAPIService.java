package com.wpp_message.features.wpp.connect_api;

import com.wpp_message.features.wpp.connect_api.auth.WppConnectAPIAuthServiceHandle;
import com.wpp_message.features.wpp.connect_api.requests.WppAPISendMessageRequest;
import io.quarkus.rest.client.reactive.NotBody;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.WebApplicationException;
import org.eclipse.microprofile.rest.client.annotation.ClientHeaderParam;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

/**
 * Endpoints para interagir com a API do wppconnect-server
 * https://github.com/wppconnect-team/wppconnect-server
 */
@RegisterRestClient(configKey = "wppconnect-api")
public interface WppConnectAPIService {

    @POST
    @Path(WppConnectAPIAuthServiceHandle.SESSION + "/send-message")
    @ClientHeaderParam(name = "Authorization", value = "Bearer {token}")
    Object sendMessage(WppAPISendMessageRequest request, @NotBody String token) throws WebApplicationException;

}
