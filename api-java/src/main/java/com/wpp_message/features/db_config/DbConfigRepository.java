package com.wpp_message.features.db_config;

import com.wpp_message.generic.crud.GenericRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DbConfigRepository extends GenericRepository<DbConfig, Long> {
}
