package com.wpp_message.features.message;

import com.wpp_message.generic.crud.EntityId;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Table(name = "messages", schema = "public")
@Entity
public class Message implements EntityId<Long> {

    public final static String PHONE_COLUMN = "telefone";

    @Id
    @SequenceGenerator(name = "messages_id_sequence", sequenceName = "messages_id_sequence", allocationSize = 1, initialValue = 1)
    @GeneratedValue(generator = "messages_id_sequence")
    private Long id;

    @NotNull
    private String title;

    @NotNull
    private String sql;

    @NotNull
    private String message;

}
