package com.wpp_message.generic.crud;

import com.wpp_message.reponses.GenericResponse;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Response;
import lombok.Getter;

import java.util.List;

/**
 * @param <T> Entity
 * @param <I> ID type
 * @param <S> GenericService
 */
public abstract class GenericResource<
        T extends EntityId<I>,
        I,
        S extends GenericService> {

    @Getter
    @Inject
    S service;

    @GET
    public List<T> get() {
        return service.findAll();
    }

    @GET
    @Path("{id}")
    public T getById(@PathParam("id") I id) {
        return (T) service.findById(id);
    }

    @POST
    @Transactional
    public Response save(@Valid T entity) {
        return Response.status(Response.Status.CREATED).entity(service.save(entity)).build();
    }

    @PUT
    @Transactional
    public Response update(@Valid T entity) {
        return Response.ok(service.update(entity)).build();
    }

    @DELETE
    @Path("{id}")
    @Transactional
    public GenericResponse deleteById(@PathParam("id") I id) {
        return service.deleteById(id);
    }

}
