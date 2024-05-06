package com.wpp_message.features.wpp.connect_api.auth.responses;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WppConnectAPIStartSessionResponse {

    private String status;
    private String qrcode;
    private String urlcode;
    private String version;
    private String session;

}
