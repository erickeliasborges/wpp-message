package com.wpp_message.features.db_config.connection;

import com.wpp_message.exception.db_connection.DbConnectionException;
import com.wpp_message.features.db_config.DbConfig;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Optional;

public class DbConnectionPostgresql implements DbConnection {

    @Override
    public Optional<Connection> connect(DbConfig dbConfig) {
        Connection connection;
        String driverUrl = getDriverUrl(dbConfig);
        try {
            connection = DriverManager.getConnection(
                    driverUrl,
                    dbConfig.getUsername(),
                    dbConfig.getPassword()
            );
            return Optional.of(connection);
        } catch (SQLException e) {
            e.printStackTrace();
            throw new DbConnectionException(
                    "Não foi possível conectar ao banco PostgreSQL, url '" + driverUrl + "'." +
                            System.lineSeparator() +
                            "Detalhes: " + e.getMessage()
            );
        }
    }

    private String getDriverUrl(DbConfig dbConfig) {
        return "jdbc:postgresql://" +
                dbConfig.getHost() + ":" + dbConfig.getPort() + "/" + dbConfig.getName() +
                "?ApplicationName="+ getApplicationName();
    }

}
