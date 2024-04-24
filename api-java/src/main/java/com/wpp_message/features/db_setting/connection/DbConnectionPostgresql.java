package com.wpp_message.features.db_setting.connection;

import com.wpp_message.exception.db_connection.DbConnectionException;
import com.wpp_message.features.db_setting.DbSetting;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Optional;

public class DbConnectionPostgresql implements DbConnection {

    @Override
    public Optional<Connection> connect(DbSetting dbSetting) {
        Connection connection;
        String driverUrl = getDriverUrl(dbSetting);
        try {
            connection = DriverManager.getConnection(
                    driverUrl,
                    dbSetting.getUsername(),
                    dbSetting.getPassword()
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

    private String getDriverUrl(DbSetting dbSetting) {
        return "jdbc:postgresql://" +
                dbSetting.getHost() + ":" + dbSetting.getPort() + "/" + dbSetting.getName() +
                "?ApplicationName="+ getApplicationName();
    }

}
