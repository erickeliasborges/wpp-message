package com.wpp_message.utils;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ResultSetUtils {

    private ResultSetUtils() {}

    public static boolean columnExistsInResultSet(ResultSet resultSet, String columnName) {
        try {
            return (resultSet.findColumn(columnName) > 0);
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

}
