package com.wpp_message.reponses;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class GenericResponse {

    private String errorId;
    private String message;
    private String error;
    private Integer httpStatus;

    public static GenericResponse getGenericResponse(String errorId, String message, String error, Integer status) {
        return GenericResponse.builder()
                .errorId(errorId)
                .message(message)
                .error(error)
                .httpStatus(status)
                .build();
    }

    public static GenericResponse getGenericResponse(String message, String error, Integer status) {
        return GenericResponse.builder()
                .message(message)
                .error(error)
                .httpStatus(status)
                .build();
    }

    public static GenericResponse getGenericResponse(String message, Integer status) {
        return GenericResponse.builder()
                .message(message)
                .httpStatus(status)
                .build();
    }

}
