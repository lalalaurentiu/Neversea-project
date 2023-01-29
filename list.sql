CREATE DATABASE list_db;

use list_db;

CREATE TABLE questions(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    question VARCHAR(300) NOT NULL
);

INSERT INTO questions(id, question) VALUES
('1', 'Why is Raycast free for personal use?'),
('2', 'When is Raycast for teams available?'),
('3', 'How many seats do I get in a Team plan?'),
('4', 'Can I have personal Extensions and Team Extensions?'),
('5', 'How much will Team features cost?');

SELECT * FROM questions;

