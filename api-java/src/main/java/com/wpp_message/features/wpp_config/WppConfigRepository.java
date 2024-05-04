package com.wpp_message.features.wpp_config;

import com.wpp_message.generic.crud.GenericRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WppConfigRepository extends GenericRepository<WppConfig, Long> {
}
