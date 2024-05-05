package com.wpp_message.features.wpp.config;

import com.wpp_message.generic.crud.GenericOneConfigService;
import jakarta.enterprise.context.RequestScoped;

@RequestScoped
public class WppConfigService extends GenericOneConfigService<WppConfig, Long, WppConfigRepository> {

    @Override
    public String getConfigName() {
        return "WhatsApp";
    }

}
