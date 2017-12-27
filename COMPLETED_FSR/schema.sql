DROP DATABASE IF EXISTS fullStackDemo;

CREATE DATABASE fullStackDemo;

USE fullStackDemo;

CREATE TABLE todo (
  id int NOT NULL AUTO_INCREMENT,
  todoText text NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/
