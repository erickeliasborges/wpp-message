package com.wpp_message.features.wpp.config;

import com.wpp_message.features.wpp.connect_api.auth.WppConnectAPIAuthServiceHandle;
import com.wpp_message.generic.crud.GenericOneConfigService;
import com.wpp_message.reponses.GenericResponse;
import jakarta.enterprise.context.RequestScoped;

@RequestScoped
public class WppConfigService extends GenericOneConfigService<WppConfig, Long, WppConfigRepository> {

    private final WppConnectAPIAuthServiceHandle wppConnectAPIAuthServiceHandle;

    public WppConfigService(
            WppConnectAPIAuthServiceHandle wppConnectAPIAuthServiceHandle
    ) {
        this.wppConnectAPIAuthServiceHandle = wppConnectAPIAuthServiceHandle;
    }

    @Override
    public String getConfigName() {
        return "WhatsApp";
    }

    @Override
    public WppConfig save(WppConfig entity) {
        wppConnectAPIAuthServiceHandle.clearToken();
        return super.save(entity);
    }

    @Override
    public WppConfig update(WppConfig entity) {
        wppConnectAPIAuthServiceHandle.clearToken();
        return super.update(entity);
    }

}
