DROP DATABASE IF EXISTS users;

CREATE DATABASE users;

USE users;

CREATE TABLE userinfo (
    user_name varchar(50) not null,
    email varchar(75) not null,
    pw varchar(50) not null,
    address1 varchar(50) not null,
    address2 varchar(50) not null,
    city varchar(25) not null,
    st varchar(3) not null,
    zip varchar(10) not null,
    phone varchar(15) not null,
    ccn varchar(20) not null,
    exp varchar(8) not null,
    cvv varchar(5) not null,
    billzip varchar(10) not null
);