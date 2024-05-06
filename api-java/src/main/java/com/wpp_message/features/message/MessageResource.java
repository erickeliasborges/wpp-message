package com.wpp_message.features.message;

import com.wpp_message.generic.crud.GenericResource;
import com.wpp_message.reponses.GenericResponse;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.core.Response;

@Path("message")
public class MessageResource extends GenericResource<Message, Long, MessageService> {

    @POST
    @Path("wpp/send/{id}")
    public Response sendMessageWpp(@PathParam("id") Long id) {
        getService().sendByWpp(id);
        return Response.ok(
                GenericResponse.getGenericResponse(
                        "Mensagem enviada via WhatsApp com sucesso.",
                        Response.Status.OK.getStatusCode()
                )
        ).build();
    }

}
