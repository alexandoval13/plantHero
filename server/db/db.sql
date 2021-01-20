-- create a database
DROP DATABASE IF EXISTS planthero;

CREATE DATABASE planthero;

\c planthero;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(30) NOT NULL,
  user_pw VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS userplants (
  id SERIAL PRIMARY KEY,
  plant_name VARCHAR(30) NOT NULL,
  nickname VARCHAR(30),
  light VARCHAR(30),
  watering_times INT NOT NULL,
  watering_weeks INT NOT NULL,
  last_watered DATE NOT NULL,
  humidity VARCHAR(10),
  photoURL VARCHAR,
  user_id INT NOT NULL REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS usercategories (
  id SERIAL PRIMARY KEY,
  category_value VARCHAR(30),
  category_label VARCHAR(30),
  user_id INT NOT NULL REFERENCES users(id)
);

 -- NOTE can calculate "age" with AGE() function