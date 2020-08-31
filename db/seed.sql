INSERT INTO users
(email, password)
VALUES
('test', 'test');

INSERT INTO backpacks 
(backpack_weight, backpack_desciption)
VALUES
('35L', 'Perfect for day hikes or over night'),
('50L', '3 day to 5 day'),
('75L', '5 day plus')

SELECT * FROM  backpack_gear
JOIN backpacks ON backpack_gear.backpack_id = backpacks.backpack_id
JOIN gear ON backpack_gear.gear_id = gear.gear_id
WHERE backpack_gear.user_id = $1;

INSERT INTO backpack_gear 
(backpack_id, gear_id, user_id)
VALUES
($1, $2, $3)