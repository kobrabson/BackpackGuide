SELECT backpack_gear.backpack_gear_id, backpack_gear.backpack_id, backpack_gear.gear_id FROM backpack_gear
JOIN backpacks
ON backpacks.backpack_id = backpack_gear.backpack_gear_id
WHERE backpacks.backpack_id = $1;