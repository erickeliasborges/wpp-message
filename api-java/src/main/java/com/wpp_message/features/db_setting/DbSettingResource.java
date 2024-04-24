package com.wpp_message.features.db_setting;

import com.wpp_message.generic.crud.GenericResource;
import jakarta.enterprise.context.RequestScoped;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;

import java.sql.SQLException;

@RequestScoped
@Path("db-setting")
public class DbSettingResource extends GenericResource<DbSetting, Long, DbSettingService> {

    @POST
    @Path("connection/test")
    public Response connectionTest(DbSetting dbSetting) throws SQLException {
        if (getService().isConnectionTestOk(dbSetting)) {
            return Response.ok("Conectado com sucesso.").build();
        }
        return Response.status(Response.Status.BAD_REQUEST)
                .entity("Não foi possível conectar no banco de dados. Verifique as informações e tente novamente.")
                .build();
    }

}
