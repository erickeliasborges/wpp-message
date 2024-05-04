-- Tabela messages
CREATE TABLE IF NOT EXISTS ${public_schema}.messages (
    id int8 NOT NULL,
    title VARCHAR(2000),
    sql TEXT,
    message TEXT,
    CONSTRAINT messages_pkey PRIMARY KEY (id)
);
CREATE SEQUENCE ${public_schema}.messages_id_sequence
    INCREMENT BY 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    START 1
	CACHE 1
	NO CYCLE;

-- Tabela db_config
CREATE TABLE IF NOT EXISTS ${public_schema}.db_config (
    id int8 NOT NULL,
    type SMALLINT, -- Postgres, Oracle, Firebase
    host VARCHAR(100),
    port INT,
    name VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255),
    CONSTRAINT db_config_pkey PRIMARY KEY (id)
);
CREATE SEQUENCE ${public_schema}.db_config_id_sequence
    INCREMENT BY 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    START 1
	CACHE 1
	NO CYCLE;

-- Tabela wpp_config
CREATE TABLE IF NOT EXISTS ${public_schema}.wpp_config (
    id int8 NOT NULL,
    secret_key VARCHAR(800),
    CONSTRAINT wpp_config_pkey PRIMARY KEY (id)
);
CREATE SEQUENCE ${public_schema}.wpp_config_id_sequence
    INCREMENT BY 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    START 1
	CACHE 1
	NO CYCLE;