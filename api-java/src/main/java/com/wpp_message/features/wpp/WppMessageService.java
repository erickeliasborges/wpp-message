package com.wpp_message.features.wpp;

import jakarta.enterprise.context.RequestScoped;
import lombok.SneakyThrows;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@RequestScoped
public class WppMessageService {

    @SneakyThrows // TODO: Tratar exceções depois
    public void send(String phone, String message) {
        HttpClient client = HttpClient.newBuilder()
                .version(HttpClient.Version.HTTP_1_1)
                .build();
        String url = "http://localhost:21465/api/wppmessage/send-message";
        String jsonPayload = """
        {
            "phone": "%s",
            "message": "%s",
            "isGroup": false
        }
        """.formatted(phone, message);
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .header("Content-Type", "application/json")
                .header("Authorization", "Bearer $2b$10$uBl7fSdLqmWTdkydEZqRQOdP_mh1oQ171xyM6j.hUirH9QGndNPua")
                .POST(HttpRequest.BodyPublishers.ofString(jsonPayload))
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println("Response status code: " + response.statusCode());
        System.out.println("Response body: " + response.body());
    }

}
