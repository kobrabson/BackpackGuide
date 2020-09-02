-- SELECT backpack_gear.backpack_gear_id, backpack_gear.backpack_id, backpack_gear.gear_id FROM backpack_gear
-- JOIN backpacks
-- ON backpacks.backpack_id = backpack_gear.backpack_gear_id
-- WHERE backpacks.backpack_id = $1;

SELECT * FROM  backpack_gear
JOIN backpacks ON backpack_gear.backpack_id = backpacks.backpack_id
JOIN gear ON backpack_gear.gear_id = gear.gear_id
WHERE backpack_gear.user_id = $1;