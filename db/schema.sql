create database burgers_db;
use burgers_db; 
create table burgers{
    id int auto_increment not null primary key, 
    burger_name (250) var char not null, 
    devoured not null boolean
};