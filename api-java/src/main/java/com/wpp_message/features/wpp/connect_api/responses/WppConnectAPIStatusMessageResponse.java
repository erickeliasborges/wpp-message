package com.wpp_message.features.wpp.connect_api.responses;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public abstract class WppConnectAPIStatusMessageResponse {

    private boolean status;
    private String message;

}
