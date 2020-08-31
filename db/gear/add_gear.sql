INSERT INTO gear
(name, weight, description, gear_genre, image)
VALUES
($1, $2, $3, $4, $5);

SELECT * FROM gear
ORDER BY weight ASC;