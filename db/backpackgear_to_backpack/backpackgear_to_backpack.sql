

SELECT *
FROM backpack_gear
    JOIN backpacks ON backpack_gear.backpack_id = backpacks.backpack_id
    JOIN gear ON backpack_gear.gear_id = gear.gear_id
WHERE backpack_gear.user_id = $1