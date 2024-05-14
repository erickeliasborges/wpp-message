package com.wpp_message.features.message;

import com.wpp_message.generic.crud.GenericResource;
import com.wpp_message.reponses.GenericResponse;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.core.Response;

@Path("message")
public class MessageResource extends GenericResource<Message, Long, MessageService> {

    @GET
    @Path("wpp/send/{id}")
    public Response sendMessageWpp(@PathParam("id") Long id) {
        getService().sendByWpp(id);
        return Response.ok(
                GenericResponse.getGenericResponse(
                        "Mensagem enviada com sucesso para o WhatsApp dos telefones encontrados no SQL.",
                        Response.Status.OK.getStatusCode()
                )
        ).build();
    }

}
