package com.wpp_message.features.db_config.connection;

import com.wpp_message.features.db_config.enums.DbConfigType;

public class DbConnectionBuilder {

    private final DbConfigType type;

    public DbConnectionBuilder(DbConfigType type) {
        this.type = type;
    }

    public static DbConnectionBuilder type(DbConfigType type) {
        return new DbConnectionBuilder(type);
    }

    public DbConnection build() {
        switch (type) {
            case POSTGRESQL -> {
                return new DbConnectionPostgresql();
            }
            default -> {
                throw new RuntimeException("Tipo do banco de dados não encontrado, as opções são (POSTGRESQL, ORACLE, FIREBASE).");
            }
        }
    }

}
