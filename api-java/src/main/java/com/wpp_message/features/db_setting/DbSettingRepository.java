package com.wpp_message.features.db_setting;

import com.wpp_message.generic.crud.GenericRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DbSettingRepository extends GenericRepository<DbSetting, Long> {
}
