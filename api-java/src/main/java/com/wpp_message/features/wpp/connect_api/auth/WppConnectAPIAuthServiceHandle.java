package com.wpp_message.features.wpp.connect_api.auth;

import com.wpp_message.features.wpp.config.WppConfig;
import com.wpp_message.features.wpp.config.WppConfigService;
import com.wpp_message.features.wpp.connect_api.auth.requests.WppConnectAPIStartSessionRequest;
import com.wpp_message.features.wpp.connect_api.auth.responses.*;
import jakarta.enterprise.context.ApplicationScoped;
import org.eclipse.microprofile.rest.client.inject.RestClient;

import java.util.Objects;

@ApplicationScoped
public class WppConnectAPIAuthServiceHandle {

    private final WppConnectAPIAuthService wppConnectAPIAuthService;
    private final WppConfigService wppConfigService;

    public WppConnectAPIAuthServiceHandle(
            @RestClient WppConnectAPIAuthService wppConnectAPIAuthService,
            WppConfigService wppConfigService
    ) {
        this.wppConnectAPIAuthService = wppConnectAPIAuthService;
        this.wppConfigService = wppConfigService;
    }

    public static final String SESSION = "wppmessage";

    private static WppConnectAPITokenResponse token;

    private void generateToken() {
        WppConfig wppConfig = wppConfigService.findOrElseThrowException();
        token = wppConnectAPIAuthService.generateToken(wppConfig.getSecretKey());
    }

    public WppConnectAPITokenResponse getToken() {
        if (Objects.isNull(token)) {
            generateToken();
        }
        return token;
    }

    public void clearToken() {
        token = null;
    }

    public WppConnectAPIStartSessionResponse startSession() {
        return wppConnectAPIAuthService.startSession(
                new WppConnectAPIStartSessionRequest(true),
                getToken().getToken()
        );
    }

    public WppConnectAPICheckConnectionSessionResponse checkConnectionSession() {
        return wppConnectAPIAuthService.checkConnectionSession(getToken().getToken());
    }

    public WppConnectAPICloseSessionResponse closeSession() {
        return wppConnectAPIAuthService.closeSession(getToken().getToken());
    }

    public WppConnectAPILogoutSessionResponse logoutSession() {
        return wppConnectAPIAuthService.logoutSession(getToken().getToken());
    }

}
