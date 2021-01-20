-- create a database
DROP DATABASE IF EXISTS planthero;

CREATE DATABASE planthero;

 \c planthero;

 CREATE TABLE IF NOT EXISTS user (
   id serial primary key,
   user_name text not null,
   user_pw text not null
 );

 CREATE TABLE IF NOT EXISTS plants (
   id serial primary key,
   plant_name VARCHAR(30) not null,
   nickname VARCHAR(30),
   light VARCHAR(30),
   watering_times int not null,
   watering_weeks int not null,
   last_watered date not null,
   humidity VARCHAR(10),
   photoURL VARCHAR,
 );

 -- NOTE can calculate "age" with AGE() function