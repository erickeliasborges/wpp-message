package com.wpp_message.exception.validation;

import com.wpp_message.reponses.GenericResponse;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;
import lombok.extern.slf4j.Slf4j;

@Provider
@Slf4j
public class ValidationExceptionHandler implements ExceptionMapper<ValidationException> {

    @Override
    public Response toResponse(ValidationException exception) {
        return Response.status(Response.Status.BAD_REQUEST)
                .entity(GenericResponse.getGenericResponse(
                        exception.getMessage(),
                        Response.Status.BAD_REQUEST.getStatusCode()))
                .build();
    }

}
