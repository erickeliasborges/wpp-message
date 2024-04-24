package com.wpp_message.features.db_setting;

import com.wpp_message.features.db_setting.enums.DbSettingType;
import com.wpp_message.generic.crud.EntityId;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Table(name = "db_settings", schema = "public")
@Entity
public class DbSetting implements EntityId<Long> {

    @Id
    @SequenceGenerator(name = "db_settings_id_sequence", sequenceName = "db_settings_id_sequence", allocationSize = 1, initialValue = 1)
    @GeneratedValue(generator = "db_settings_id_sequence")
    private Long id;

    @NotNull
    @Enumerated(EnumType.ORDINAL)
    private DbSettingType type;

    @NotNull
    private String host;

    @NotNull
    private Integer port;

    @NotNull
    private String name;

    @NotNull
    private String username;

    @NotNull
    private String password;

}
