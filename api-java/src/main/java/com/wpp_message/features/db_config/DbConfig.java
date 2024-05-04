package com.wpp_message.features.db_config;

import com.wpp_message.features.db_config.enums.DbConfigType;
import com.wpp_message.generic.crud.EntityId;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Table(name = "db_config", schema = "public")
@Entity
public class DbConfig implements EntityId<Long> {

    @Id
    @SequenceGenerator(name = "db_config_id_sequence", sequenceName = "db_config_id_sequence", allocationSize = 1, initialValue = 1)
    @GeneratedValue(generator = "db_config_id_sequence")
    private Long id;

    @NotNull
    @Enumerated(EnumType.ORDINAL)
    private DbConfigType type;

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
