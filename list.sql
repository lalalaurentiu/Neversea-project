CREATE DATABASE list_db;

use list_db;

CREATE TABLE questions(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    question VARCHAR(300) NOT NULL
);

INSERT INTO questions(id, question) VALUES
('1', 'What are the basic precautions I can take to protect myself from COVID-19?'),
('2', 'When What should I do if I think I have been exposed to COVID-19?'),
('3', 'How can I prepare in case I get sick with COVID-19?');

SELECT * FROM questions;

