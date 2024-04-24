package com.wpp_message.features.db_setting.connection;

import com.wpp_message.features.db_setting.enums.DbSettingType;

public class DbConnectionBuilder {

    private final DbSettingType type;

    public DbConnectionBuilder(DbSettingType type) {
        this.type = type;
    }

    public static DbConnectionBuilder type(DbSettingType type) {
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
