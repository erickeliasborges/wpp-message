package com.wpp_message.reponses;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TokenResponse {

    private String token;
    private Long issuedAt;
    private Long expiresAt;
    private Long durationMillisecs;

}
