CREATE DATABASE database_people_manager

\c database_people_manager

CREATE TABLE users(

    id SERIAL PRIMARY KEY,
    num_indentif numeric(10,0),
    nombre1 character varying(25) COLLATE pg_catalog."default" NOT NULL,
    nombre2 character varying(25) COLLATE pg_catalog."default",
    apellido1 character varying(25) COLLATE pg_catalog."default" NOT NULL,
    apellido2 character varying(25) COLLATE pg_catalog."default",
    profile_pic character varying(3000) COLLATE pg_catalog."default"
    pasatiempo character varying(3000) COLLATE pg_catalog."default"
);
