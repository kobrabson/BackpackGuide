SELECT backpack_gear.backpack_gear_id, backpack_gear.gear_id, gear.name, gear.weight, gear.description, gear.image, gear.genre FROM backpack_gear JOIN gear
ON backpack_gear.backpack_gear_id = gear.gear_id
WHERE backpack_gear.backpack_gear_id = $1;