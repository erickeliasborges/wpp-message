package com.wpp_message.exception.db_connection;

import com.wpp_message.reponses.GenericResponse;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;
import lombok.extern.slf4j.Slf4j;

@Provider
@Slf4j
public class DbConnectionExceptionHandler implements ExceptionMapper<DbConnectionException> {

    @Override
    public Response toResponse(DbConnectionException exception) {
        return Response.status(Response.Status.BAD_REQUEST)
                .entity(GenericResponse.getGenericResponse(
                        exception.getMessage(),
                        Response.Status.BAD_REQUEST.getStatusCode()))
                .build();
    }

}
