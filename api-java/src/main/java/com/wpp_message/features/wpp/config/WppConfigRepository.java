package com.wpp_message.features.wpp.config;

import com.wpp_message.generic.crud.GenericRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WppConfigRepository extends GenericRepository<WppConfig, Long> {
}
