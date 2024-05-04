package com.wpp_message.features.db_config;

import com.wpp_message.features.db_config.connection.DbConnection;
import com.wpp_message.features.db_config.connection.DbConnectionBuilder;
import com.wpp_message.generic.crud.GenericOneConfigService;
import jakarta.enterprise.context.RequestScoped;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Optional;

// TODO: se depois essa configuração se tornar por mensagem e não pro sistema extender de GenericService
@RequestScoped
public class DbConfigService extends GenericOneConfigService<DbConfig, Long, DbConfigRepository> {

    @Override
    public String getConfigName() {
        return "Banco de dados";
    }

    public boolean isConnectionTestOk(DbConfig dbConfig) throws SQLException {
        DbConnection dbConnection = DbConnectionBuilder.type(dbConfig.getType()).build();
        Optional<Connection> optionalConnection = dbConnection.connect(dbConfig);
        if (optionalConnection.isPresent()) {
            optionalConnection.get().close();
            return true;
        }
        return false;
    }

}
