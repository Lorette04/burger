CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table burgers.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL,
ingredient varchar(255) NOT NULL,
devoured BOOLEAN not null,
PRIMARY KEY (id)
);

