package com.wpp_message.features.wpp.connect_api;

import com.wpp_message.features.wpp.connect_api.auth.WppConnectAPIAuthServiceHandle;
import com.wpp_message.features.wpp.connect_api.auth.WppConnectAPITokenResponse;
import com.wpp_message.features.wpp.connect_api.requests.WppAPISendMessageRequest;
import jakarta.enterprise.context.RequestScoped;
import org.eclipse.microprofile.rest.client.inject.RestClient;

@RequestScoped
public class WppConnectAPIServiceHandle {

    @RestClient
    WppConnectAPIService wppConnectAPIService;

    private final WppConnectAPIAuthServiceHandle wppConnectAPIAuthServiceHandle;

    public WppConnectAPIServiceHandle(
            WppConnectAPIAuthServiceHandle wppConnectAPIAuthServiceHandle
    ) {
        this.wppConnectAPIAuthServiceHandle = wppConnectAPIAuthServiceHandle;
    }

    public void send(WppAPISendMessageRequest request) {
        WppConnectAPITokenResponse token = wppConnectAPIAuthServiceHandle.getToken();
//        try {
            wppConnectAPIService.sendMessage(
                    request,
                    token.getToken()
            );
//        } catch (WebApplicationException exception) {
//            exception.getResponse().readEntity(String.class); // pegar retorno
//        }

//        HttpClient client = HttpClient.newBuilder()
//                .version(HttpClient.Version.HTTP_1_1)
//                .build();
//        String url = "http://localhost:21465/api/wppmessage/send-message";
//        String jsonPayload = """
//        {
//            "phone": "%s",
//            "message": "%s",
//            "isGroup": false
//        }
//        """.formatted(phone, message);
//        HttpRequest request = HttpRequest.newBuilder()
//                .uri(URI.create(url))
//                .header("Content-Type", "application/json")
//                .header("Authorization", "Bearer $2b$10$uBl7fSdLqmWTdkydEZqRQOdP_mh1oQ171xyM6j.hUirH9QGndNPua")
//                .POST(HttpRequest.BodyPublishers.ofString(jsonPayload))
//                .build();
//        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
//        System.out.println("Response status code: " + response.statusCode());
//        System.out.println("Response body: " + response.body());
    }

}
