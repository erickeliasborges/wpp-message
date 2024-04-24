package com.wpp_message.features.db_setting;

import com.wpp_message.exception.validation.ValidationException;
import com.wpp_message.features.db_setting.connection.DbConnection;
import com.wpp_message.features.db_setting.connection.DbConnectionBuilder;
import com.wpp_message.generic.crud.GenericService;
import jakarta.enterprise.context.RequestScoped;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@RequestScoped
public class DbSettingService extends GenericService<DbSetting, Long, DbSettingRepository> {

    public boolean isConnectionTestOk(DbSetting dbSetting) throws SQLException {
        DbConnection dbConnection = DbConnectionBuilder.type(dbSetting.getType()).build();
        Optional<Connection> optionalConnection = dbConnection.connect(dbSetting);
        if (optionalConnection.isPresent()) {
            optionalConnection.get().close();
            return true;
        }
        return false;
    }

    public DbSetting findFirstOrElseThrowException() {
        List<DbSetting> list = findAll();
        if (list.isEmpty()) {
            throw new ValidationException("Nenhuma configuração de banco de dados encontrada.");
        }
        return list.get(0);
    }

}
