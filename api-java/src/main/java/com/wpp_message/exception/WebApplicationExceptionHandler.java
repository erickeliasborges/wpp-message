package com.wpp_message.exception;

import jakarta.ws.rs.Produces;
import jakarta.ws.rs.WebApplicationException;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;

import java.util.Objects;

@Provider
public class WebApplicationExceptionHandler implements ExceptionMapper<WebApplicationException> {

    @Override
    @Produces(MediaType.APPLICATION_JSON)
    public Response toResponse(WebApplicationException e) {
        Response exceptionResponse = e.getResponse();
        if (exceptionResponse.hasEntity() && Objects.isNull(exceptionResponse.getEntity())) {
            String exceptionEntity = exceptionResponse.readEntity(String.class);
            return Response
                    .status(exceptionResponse.getStatus())
                    .entity(exceptionEntity)
                    .type(exceptionResponse.getMediaType())
                    .build();
        }
        return exceptionResponse;
    }

}
