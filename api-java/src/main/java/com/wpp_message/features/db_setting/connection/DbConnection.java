package com.wpp_message.features.db_setting.connection;

import com.wpp_message.exception.db_connection.DbConnectionException;
import com.wpp_message.features.db_setting.DbSetting;

import java.sql.Connection;
import java.util.Optional;

public interface DbConnection {

    default String getApplicationName() {
        return "api_wpp_message";
    }

    Optional<Connection> connect(DbSetting dbSetting);

    default Connection connectOrElseThrowException(DbSetting dbSetting) {
        Optional<Connection> connectionOptional = connect(dbSetting);
        return connectionOptional.orElseThrow(
                () -> new DbConnectionException("Não foi possível conectar ao banco de dados com as informações passadas.")
        );
    }

}
