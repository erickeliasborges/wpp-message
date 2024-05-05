package com.wpp_message.features.wpp.connect_api.auth;

import com.wpp_message.features.wpp.config.WppConfig;
import com.wpp_message.features.wpp.config.WppConfigService;
import jakarta.enterprise.context.ApplicationScoped;
import org.eclipse.microprofile.rest.client.inject.RestClient;

import java.util.Objects;

@ApplicationScoped
public class WppConnectAPIAuthServiceHandle {

    public static final String SESSION = "wppmessage";

    private static WppConnectAPITokenResponse token;

    @RestClient
    WppConnectAPIAuthService wppConnectAPIAuthService;

    private final WppConfigService wppConfigService;

    public WppConnectAPIAuthServiceHandle(
            WppConfigService wppConfigService
    ) {
        this.wppConfigService = wppConfigService;
    }

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

}
