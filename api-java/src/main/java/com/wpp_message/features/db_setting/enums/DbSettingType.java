package com.wpp_message.features.db_setting.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public enum DbSettingType {

    POSTGRESQL("PostgreSQL"),
    ORACLE("Oracle"),
    FIREBASE("Firebase");

    @Getter
    private String value;

}
