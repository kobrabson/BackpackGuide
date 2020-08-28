DELETE FROM gear
WHERE
gear_id = $1;

SELECT * FROM gear
ORDER BY gear_id