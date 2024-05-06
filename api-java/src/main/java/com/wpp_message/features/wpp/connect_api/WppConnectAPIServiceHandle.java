package com.wpp_message.features.wpp.connect_api;

import com.wpp_message.features.wpp.connect_api.auth.WppConnectAPIAuthServiceHandle;
import com.wpp_message.features.wpp.connect_api.auth.responses.WppConnectAPITokenResponse;
import com.wpp_message.features.wpp.connect_api.requests.WppAPISendMessageRequest;
import jakarta.enterprise.context.RequestScoped;
import org.eclipse.microprofile.rest.client.inject.RestClient;

@RequestScoped
public class WppConnectAPIServiceHandle {

    private final WppConnectAPIService wppConnectAPIService;
    private final WppConnectAPIAuthServiceHandle wppConnectAPIAuthServiceHandle;

    public WppConnectAPIServiceHandle(
            @RestClient WppConnectAPIService wppConnectAPIService,
            WppConnectAPIAuthServiceHandle wppConnectAPIAuthServiceHandle
    ) {
        this.wppConnectAPIService = wppConnectAPIService;
        this.wppConnectAPIAuthServiceHandle = wppConnectAPIAuthServiceHandle;
    }

    public void send(WppAPISendMessageRequest request) {
        WppConnectAPITokenResponse token = wppConnectAPIAuthServiceHandle.getToken();
//        try {
            wppConnectAPIService.sendMessage(
                    request,
                    token.getToken()
            );
//        } catch (WebApplicationException exception) {
//            exception.getResponse().readEntity(String.class); // pegar retorno
//        }
    }

}
