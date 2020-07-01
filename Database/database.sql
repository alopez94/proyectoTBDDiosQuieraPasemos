CREATE DATABASE ng_games_db;

USE ng_games_db;

CREATE TABLE games(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(180),
    columns VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 

);






