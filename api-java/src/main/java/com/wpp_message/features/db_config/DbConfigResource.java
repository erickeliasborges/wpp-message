package com.wpp_message.features.db_config;

import com.wpp_message.generic.crud.GenericResource;
import com.wpp_message.reponses.GenericResponse;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;

import java.sql.SQLException;
import java.util.List;

@Path("db-config")
public class DbConfigResource extends GenericResource<DbConfig, Long, DbConfigService> {

    @GET
    @Path("default")
    public DbConfig getConfig() {
        List<DbConfig> dbConfigs = getService().findAll();
        if (dbConfigs.isEmpty()) {
            return new DbConfig();
        }
        return dbConfigs.get(0);
    }

    @POST
    @Path("connection/test")
    public Response connectionTest(DbConfig dbConfig) throws SQLException {
        if (getService().isConnectionTestOk(dbConfig)) {
            return Response.ok(
                    GenericResponse.getGenericResponse("Conectado com sucesso.", Response.Status.OK.getStatusCode())
            ).build();
        }
        return Response.status(Response.Status.BAD_REQUEST)
                .entity(
                        GenericResponse.getGenericResponse(
                                "Não foi possível conectar no banco de dados. Verifique as informações e tente novamente.",
                                Response.Status.BAD_REQUEST.getStatusCode()
                        )
                )
                .build();
    }

}
