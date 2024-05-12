package com.wpp_message.generic.crud;

import com.wpp_message.reponses.GenericResponse;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import jakarta.ws.rs.NotFoundException;
import jakarta.ws.rs.core.Response;
import lombok.Getter;

import java.util.List;
import java.util.Optional;

@Getter
public abstract class GenericService<T extends EntityId<ID>, ID, R extends GenericRepository> {

//    @Inject TODO: Ainda não implementado
//    AuthSecurityFilter authSecurityFilter;

    @Inject
    R repository;

    @Inject
    EntityManager entityManager;

    public Optional<T> findFirst() {
        List<T> list = findAll();
        if (list.isEmpty()) {
            return Optional.empty();
        }
        return Optional.of(list.get(0));
    }

    public List<T> findAll() {
        return repository.findAll();
    }

    public T findById(ID id) {
        Optional<T> optional = repository.findById(id);
        if (!optional.isPresent())
            throwNotFoundException();

        return optional.get();
    }

    public T save(T entity) {
        setDefaultValuesWhenNew(entity);
        repository.save(entity);
        return entity;
    }

    public void setDefaultValuesWhenNew(T entity) {
    }

    public T update(T entity) {
        repository.save(entity);
        return entity;
    }

    public GenericResponse deleteById(ID id) {
        if (!repository.existsById(id))
            throwNotFoundException();

        repository.deleteById(id);

        return GenericResponse.getGenericResponse("Registro deletado com sucesso.", Response.Status.OK.getStatusCode());
    }

    public void throwNotFoundException() {
        throw new NotFoundException("Registro não encontrado.");
    }

}
