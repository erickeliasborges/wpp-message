package com.wpp_message.features.db_config.connection;

import com.wpp_message.features.db_config.enums.DbConfigType;

public class DbConnectionFactory {

    public static DbConnection create(DbConfigType type) {
        switch (type) {
            case POSTGRESQL -> {
                return new DbConnectionPostgresql();
            }
            case FIREBASE -> {
                return new DbConnectionFirebird();
            }
            default -> {
                throw new RuntimeException("Tipo do banco de dados não encontrado, as opções são (POSTGRESQL, ORACLE, FIREBASE).");
            }
        }
    }

}
