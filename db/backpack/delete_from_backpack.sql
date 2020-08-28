DELETE FROM backpack_gear
WHERE
backpack_id = $1 AND gear_id = $2;