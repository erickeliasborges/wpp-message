package com.wpp_message.features.wpp.config;

import com.wpp_message.generic.crud.GenericResource;
import jakarta.ws.rs.Path;

@Path("wpp-config")
public class WppConfigResource extends GenericResource<WppConfig, Long, WppConfigService> {

}
