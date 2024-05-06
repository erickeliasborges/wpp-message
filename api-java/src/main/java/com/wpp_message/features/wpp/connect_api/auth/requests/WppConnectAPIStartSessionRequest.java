package com.wpp_message.features.wpp.connect_api.auth.requests;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class WppConnectAPIStartSessionRequest {

    public WppConnectAPIStartSessionRequest(boolean waitQrCode) {
        this.waitQrCode = waitQrCode;
    }

    private boolean waitQrCode;

}
