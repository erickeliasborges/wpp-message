package com.wpp_message.generic.crud;

import com.wpp_message.exception.validation.ValidationException;
import com.wpp_message.reponses.GenericResponse;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

/**
 * Service de CRUD genérico para as configurações do sistema
 * que devem possuir apenas 1 registro.
 * @param <T>
 * @param <ID>
 * @param <R>
 */
public abstract class GenericOneConfigService<T extends EntityId<ID>, ID, R extends GenericRepository> extends GenericService<T, ID, R> {

    public abstract String getConfigName();

    public T findOrElseThrowException() {
        Optional<T> entity = findFirst();
        return entity.orElseThrow(() -> new ValidationException(
                """
                Nenhuma configuração de %s foi encontrada.
                Por favor, registre uma nova configuração para continuar.
                """.formatted(getConfigName())
        ));
    }

    @Override
    public T save(T entity) {
        validateOnlyOneConfig(entity);
        return super.save(entity);
    }

    @Override
    public T update(T entity) {
        validateOnlyOneConfig(entity);
        return super.update(entity);
    }

    private void validateOnlyOneConfig(T entity) {
        List<T> list = findAll();
        if (!list.isEmpty() && !Objects.equals(list.get(0).getId(), entity.getId())) {
            throw new ValidationException(
                    """
                    Não é possível incluir mais de uma configuração.
                    Por favor, atualize a existente (id %d).
                    """.formatted(list.get(0).getId())
            );
        }
    }

}
