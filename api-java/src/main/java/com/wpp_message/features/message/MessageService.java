package com.wpp_message.features.message;

import com.wpp_message.exception.validation.ValidationException;
import com.wpp_message.features.db_setting.DbSetting;
import com.wpp_message.features.db_setting.DbSettingService;
import com.wpp_message.features.db_setting.connection.DbConnectionBuilder;
import com.wpp_message.generic.crud.GenericService;
import jakarta.enterprise.context.RequestScoped;
import lombok.SneakyThrows;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

@RequestScoped
public class MessageService extends GenericService<Message, Long, MessageRepository> {

    private final DbSettingService dbSettingService;

    public MessageService(DbSettingService dbSettingService) {
        this.dbSettingService = dbSettingService;
    }

    @SneakyThrows
    public void sendMessageWpp(Long id) {
        DbSetting dbSetting = dbSettingService.findFirstOrElseThrowException();
        Connection connection = DbConnectionBuilder
                .type(dbSetting.getType())
                .build()
                .connectOrElseThrowException(dbSetting);

        Message message = findById(id);

        ResultSet resultSet = connection.createStatement().executeQuery(message.getSql());
        if (!columnExistsInResultSet(resultSet, Message.PHONE_COLUMN)) {
            throw new ValidationException("A coluna telefone não foi encontrada no SQL. Por favor, adicione e tente novamente.");
        }
        while (resultSet.next()) {
            System.out.println();
            System.out.println("Mensagem: " + replaceMessageWithColumnValues(message.getMessage(), resultSet));
            System.out.println("Telefone: " + resultSet.getString(Message.PHONE_COLUMN));
        }
        // TODO: lembrar de fechar ResultSet e conexão
    }

    private String replaceMessageWithColumnValues(String message, ResultSet resultSet) throws SQLException {
        String messageToReplace = message;
        for (int i = 1; i <= resultSet.getMetaData().getColumnCount(); i++) {
//                resultSet.getMetaData().getColumnType(i);
            messageToReplace = messageToReplace.replace("${" + resultSet.getMetaData().getColumnName(i) + "}", resultSet.getString(i));
        }
        return messageToReplace;
    }

    private boolean columnExistsInResultSet(ResultSet resultSet, String columnName) {
        try {
            return (resultSet.findColumn(Message.PHONE_COLUMN) > 0);
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

}
