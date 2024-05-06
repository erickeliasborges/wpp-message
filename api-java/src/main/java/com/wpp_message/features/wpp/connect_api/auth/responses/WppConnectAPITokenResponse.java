package com.wpp_message.features.wpp.connect_api.auth.responses;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WppConnectAPITokenResponse {
    private String status;
    private String session;
    private String token;
    private String full;
}
