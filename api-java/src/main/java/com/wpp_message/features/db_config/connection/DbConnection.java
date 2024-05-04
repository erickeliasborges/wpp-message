package com.wpp_message.features.db_config.connection;

import com.wpp_message.exception.db_connection.DbConnectionException;
import com.wpp_message.features.db_config.DbConfig;

import java.sql.Connection;
import java.util.Optional;

public interface DbConnection {

    default String getApplicationName() {
        return "api_wpp_message";
    }

    Optional<Connection> connect(DbConfig dbConfig);

    default Connection connectOrElseThrowException(DbConfig dbConfig) {
        Optional<Connection> connectionOptional = connect(dbConfig);
        return connectionOptional.orElseThrow(
                () -> new DbConnectionException("Não foi possível conectar ao banco de dados com as informações passadas.")
        );
    }

}
