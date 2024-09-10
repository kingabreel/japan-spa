create table users (
    id uuid primary key ,
    name varchar(255),
    email varchar(255),
    password varchar(255),
    role INT
);

create table city (
    id uuid primary key ,
    name varchar(255),
    img_url varchar(255)
);

create table tourist_attractions (
    id uuid primary key,
    name varchar(255),
    description text,
    img_url varchar(255),
    city_id uuid
);