-- create a database
DROP DATABASE IF EXISTS planthero;

CREATE DATABASE planthero;

\c planthero;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(30) NOT NULL,
  user_pw VARCHAR(30) NOT NULL,
  full_name VARCHAR(45)
);

COPY users (user_id,user_pw,full_name)
FROM '/Users/alexandra/Hack-Reactor/SEI-hrr49/MVP/Rootie/server/db/csv/usersCSV.csv'
DELIMITER ','
CSV HEADER;


CREATE TABLE IF NOT EXISTS userplants (
  id SERIAL PRIMARY KEY,
  plant_name VARCHAR(30) NOT NULL,
  nickname VARCHAR(30),
  light VARCHAR(30),
  exposure VARCHAR(30),
  watering_times INT NOT NULL,
  watering_weeks INT NOT NULL,
  last_watered DATE NOT NULL,
  humidity VARCHAR(10),
  photoURL VARCHAR,
  added DATE NOT NULL,
  user_id INT NOT NULL REFERENCES users(id)
);

COPY userplants (plant_name,nickname,light,exposure,watering_times,watering_weeks,last_watered,humidity,photoURL,added,user_id)
FROM '/Users/alexandra/Hack-Reactor/SEI-hrr49/MVP/Rootie/server/db/csv/plantsCSV.csv'
DELIMITER ','
CSV HEADER;

CREATE INDEX ON userplants(user_id);



CREATE TABLE IF NOT EXISTS usercategories (
  id SERIAL PRIMARY KEY,
  category_value VARCHAR(30),
  category_label VARCHAR(30),
  plants TEXT[],
  user_id INT NOT NULL REFERENCES users(id)
);

COPY usercategories (category_value,category_label,user_id)
FROM '/Users/alexandra/Hack-Reactor/SEI-hrr49/MVP/Rootie/server/db/csv/categoriesCSV.csv'
DELIMITER ','
CSV HEADER;

CREATE INDEX ON usercategories(user_id);
 -- NOTE can calculate "age" with AGE() function