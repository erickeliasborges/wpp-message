package com.wpp_message.features.db_config.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public enum DbConfigType {

    POSTGRESQL("PostgreSQL"),
    ORACLE("Oracle"),
    FIREBASE("Firebase");

    @Getter
    private String value;

}
