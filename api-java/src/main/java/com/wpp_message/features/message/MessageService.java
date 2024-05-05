package com.wpp_message.features.message;

import com.wpp_message.exception.validation.ValidationException;
import com.wpp_message.features.db_config.DbConfig;
import com.wpp_message.features.db_config.DbConfigService;
import com.wpp_message.features.db_config.connection.DbConnectionBuilder;
import com.wpp_message.features.wpp.WppMessageService;
import com.wpp_message.generic.crud.GenericService;
import com.wpp_message.utils.ResultSetUtils;
import jakarta.enterprise.context.RequestScoped;
import lombok.SneakyThrows;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

@RequestScoped
public class MessageService extends GenericService<Message, Long, MessageRepository> {

    private final DbConfigService dbConfigService;
    private final WppMessageService wppMessageService;

    public MessageService(
            DbConfigService dbConfigService,
            WppMessageService wppMessageService
    ) {
        this.dbConfigService = dbConfigService;
        this.wppMessageService = wppMessageService;
    }

    @SneakyThrows
    public void sendByWpp(Long id) {
        DbConfig dbConfig = dbConfigService.findOrElseThrowException();
        Connection connection = DbConnectionBuilder
                .type(dbConfig.getType())
                .build()
                .connectOrElseThrowException(dbConfig);
        Message message = findById(id);
        ResultSet resultSet = connection.createStatement().executeQuery(message.getSql());
        validatePhoneColumnInResultSet(resultSet);
        while (resultSet.next()) {
            String messageToSend = replaceMessageWithResultSetColumnValues(message.getMessage(), resultSet);
            String phone = resultSet.getString(Message.PHONE_COLUMN);
            wppMessageService.send(phone, messageToSend);

            System.out.println();
            System.out.println("Mensagem: " + messageToSend);
            System.out.println("Telefone: " + phone);
        }
        resultSet.close();
        connection.close();
    }

    private String replaceMessageWithResultSetColumnValues(String message, ResultSet resultSet) throws SQLException {
        String messageToReplace = message;
        for (int i = 1; i <= resultSet.getMetaData().getColumnCount(); i++) {
            messageToReplace = messageToReplace.replace("${" + resultSet.getMetaData().getColumnName(i) + "}", resultSet.getString(i));
        }
        return messageToReplace;
    }

    private void validatePhoneColumnInResultSet(ResultSet resultSet) {
        if (!ResultSetUtils.columnExistsInResultSet(resultSet, Message.PHONE_COLUMN)) {
            throw new ValidationException("A coluna telefone não foi encontrada no SQL. Por favor, adicione e tente novamente.");
        }
    }

}
