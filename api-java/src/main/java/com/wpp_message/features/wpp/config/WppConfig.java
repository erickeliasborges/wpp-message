package com.wpp_message.features.wpp.config;

import com.wpp_message.generic.crud.EntityId;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Table(name = "wpp_config", schema = "public")
@Entity
public class WppConfig implements EntityId<Long> {

    @Id
    @SequenceGenerator(name = "wpp_config_id_sequence", sequenceName = "wpp_config_id_sequence", allocationSize = 1, initialValue = 1)
    @GeneratedValue(generator = "wpp_config_id_sequence")
    private Long id;

    @NotNull
    @Column(name = "secret_key")
    private String secretKey;

}
