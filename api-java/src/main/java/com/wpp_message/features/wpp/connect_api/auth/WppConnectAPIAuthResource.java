package com.wpp_message.features.wpp.connect_api.auth;

import com.wpp_message.features.wpp.connect_api.auth.responses.WppConnectAPICheckConnectionSessionResponse;
import com.wpp_message.features.wpp.connect_api.auth.responses.WppConnectAPICloseSessionResponse;
import com.wpp_message.features.wpp.connect_api.auth.responses.WppConnectAPILogoutSessionResponse;
import com.wpp_message.features.wpp.connect_api.auth.responses.WppConnectAPIStartSessionResponse;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

@Path("wpp-connect-api/auth")
public class WppConnectAPIAuthResource {

    private final WppConnectAPIAuthServiceHandle wppConnectAPIAuthServiceHandle;

    public WppConnectAPIAuthResource(
            WppConnectAPIAuthServiceHandle wppConnectAPIAuthServiceHandle
    ) {
        this.wppConnectAPIAuthServiceHandle = wppConnectAPIAuthServiceHandle;
    }

    @GET
    @Path("start-session")
    public WppConnectAPIStartSessionResponse startSession() {
        return wppConnectAPIAuthServiceHandle.startSession();
    }

    @GET
    @Path("check-connection-session")
    public WppConnectAPICheckConnectionSessionResponse checkConnectionSession() {
        return wppConnectAPIAuthServiceHandle.checkConnectionSession();
    }

    @GET
    @Path("close-session")
    public WppConnectAPICloseSessionResponse closeSession() {
        return wppConnectAPIAuthServiceHandle.closeSession();
    }

    @GET
    @Path("logout-session")
    public WppConnectAPILogoutSessionResponse logoutSession() {
        return wppConnectAPIAuthServiceHandle.logoutSession();
    }

}
