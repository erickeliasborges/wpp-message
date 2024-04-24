package com.wpp_message.exception;

import com.wpp_message.reponses.GenericResponse;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;
import lombok.extern.slf4j.Slf4j;

import java.util.UUID;

@Provider
@Slf4j
public class ExceptionHandler implements ExceptionMapper<Exception> {

    @Override
    public Response toResponse(Exception exception) {
        String errorId = UUID.randomUUID().toString();
        log.error("errorId[{}]", errorId, exception);
        return Response.serverError()
                .entity(GenericResponse.getGenericResponse(
                        errorId,
                        "Ocorreu um erro inesperado no sistema.",
                        exception.getMessage(),
                        Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()))
                .build();
    }

}
