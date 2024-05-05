package com.wpp_message.features.wpp;

import com.wpp_message.features.wpp.connect_api.WppConnectAPIServiceHandle;
import com.wpp_message.features.wpp.connect_api.requests.WppAPISendMessageRequest;
import jakarta.enterprise.context.RequestScoped;

/**
 * Classe que implementa a interface com os métodos para enviar mensagem via wpp,
 * a ideia dessa classe é não receber parâmetros específicos de uma API, a ideia é
 * receber parâmetros puros, assim se um dia precisar mudar para outra API
 * de envio de mensagem, não precisa mudar nas regras de negócio onde chama essa classe
 */
@RequestScoped
public class WppMessageService implements WppMessage {

    private final WppConnectAPIServiceHandle wppConnectAPIServiceHandle;

    public WppMessageService(
            WppConnectAPIServiceHandle wppConnectAPIServiceHandle
    ) {
        this.wppConnectAPIServiceHandle = wppConnectAPIServiceHandle;
    }

    @Override
    public void send(String phone, String message) {
        wppConnectAPIServiceHandle.send(
                WppAPISendMessageRequest.builder()
                        .phone(phone)
                        .message(message)
                        .isGroup(false)
                        .build()
        );
    }

}
