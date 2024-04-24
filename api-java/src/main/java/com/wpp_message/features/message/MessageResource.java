package com.wpp_message.features.message;

import com.wpp_message.generic.crud.GenericResource;
import jakarta.enterprise.context.RequestScoped;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.core.Response;

@RequestScoped
@Path("message")
public class MessageResource extends GenericResource<Message, Long, MessageService> {

    @POST
    @Path("wpp/send/{id}")
    public Response sendMessageWpp(@PathParam("id") Long id) {
        getService().sendMessageWpp(id);
        return Response.ok("Mensagem enviada via WhatsApp com sucesso.").build();
    }

}
