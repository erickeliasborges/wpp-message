package com.wpp_message.features.wpp.config;

import com.wpp_message.generic.crud.GenericResource;
import jakarta.enterprise.context.RequestScoped;
import jakarta.ws.rs.Path;

@RequestScoped
@Path("wpp-config")
public class WppConfigResource extends GenericResource<WppConfig, Long, WppConfigService> {

}
