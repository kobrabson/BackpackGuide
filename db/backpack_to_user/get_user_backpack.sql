SELECT backpacks.backpack_id, backpack.user_id, backpacks.backpack_weight FROM backpacks 
JOIN backpacks 
ON users.backpack_id = backpacks.backpack_id
WHERE backpacks.user_id = $1