package com.wpp_message.features.wpp.connect_api.requests;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class WppAPISendMessageRequest {

    private String phone;
    private String message;
    private boolean isGroup;

}
