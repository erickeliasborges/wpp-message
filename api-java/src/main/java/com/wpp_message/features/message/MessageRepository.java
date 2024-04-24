package com.wpp_message.features.message;

import com.wpp_message.generic.crud.GenericRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends GenericRepository<Message, Long> {
}
