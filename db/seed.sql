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



-- INSERT INTO gear (name, weight, categories, description, image)
-- VALUES
-- ('Compass', '8.5oz', 'Navigation', 'Military Compass', 'https://images-na.ssl-images-amazon.com/images/I/818tdYpcGUL._AC_SL1500_.jpg');
-- ('HeadLamp', '9.6oz', 'Lamps and Light', 'Cree Led 20000 Lumen headlight', 'https://images-na.ssl-images-amazon.com/images/I/71EtUFbEETL._AC_SL1500_.jpg'),
-- ('Stormproof Matches', '1.7oz', 'Fire', 'waterproof and stormproof matches 25 kit', 'https://images-na.ssl-images-amazon.com/images/I/61XCwHWvTwL._AC_SL1417_.jpg'),
-- ('Matches', '3.5oz', 'Fire', 'Tin case 168 matches', 'https://images-na.ssl-images-amazon.com/images/I/51ru2oVxCCL._AC_.jpg');
-- ('Knife', '7.58oz', 'Knives and Tools', 'Smith & Wesson 8.6in folding knife', 'https://images-na.ssl-images-amazon.com/images/I/61sOxBo1HlL._AC_SL1500_.jpg'),
-- ('Ultralight camping stove', '3.3oz', 'Cooking', 'Jetboil stove', 'https://images-na.ssl-images-amazon.com/images/I/61uMec7BkVL._AC_SL1200_.jpg'),
-- ('Freeze Dried camping food', '3.8oz', 'Dry Food', 'Mountain House Chili Mac with Beef', 'https://images-na.ssl-images-amazon.com/images/I/81%2BhG9Gut2L._AC_SL1500_.jpg'),
-- ('Featherstone Tent', '6lbs', 'Shelter', 'Ultralight 3-Season Tent', 'https://images-na.ssl-images-amazon.com/images/I/61QTMZBCMJL._AC_SL1500_.jpg'),
-- ('Paria Sleeping Bag', '3lbs', 'Sleeping', 'Thermodown -15 degree Sleeping Bag', 'https://images-na.ssl-images-amazon.com/images/I/61QTMZBCMJL._AC_SL1500_.jpg'),
-- ('Water Filter', '0.5oz', 'Hydration', 'Survivor Filter PRO Micron Water Filter', 'https://images-na.ssl-images-amazon.com/images/I/81w1%2B8hUpkL._AC_SL1500_.jpg'),
-- ('Earth Pak Dry Bag', '13oz', 'Storage', '10L Dry Bag', 'https://cdn.motor1.com/images/mgl/goLN8/s3/ra-gift-guide.jpg'),
-- ('Earth Pak Dry Bag', '1.05lbs', 'Storage', '20L Dry Bag', 'https://cdn.motor1.com/images/mgl/goLN8/s3/ra-gift-guide.jpg'),
-- ('Earth Pak Dry Bag', '1.15lbs', 'Storage', '30L Dry Bag', 'https://cdn.motor1.com/images/mgl/goLN8/s3/ra-gift-guide.jpg'),
-- ('Toilet Paper', '2.8oz', 'Toiletries', 'Biodegradable TP safe for Enviroment', 'https://images-na.ssl-images-amazon.com/images/I/71P4ZAtsWSL._AC_SL1500_.jpg'),
-- ('Compression Socks', '1.2oz', 'Clothing', 'Copper Knee Highs', 'https://images-na.ssl-images-amazon.com/images/I/51G5fke-dcL._AC_SL1200_.jpg'),
-- ('Trekking Shoes', '3.35lbs', 'Footwear', 'Outdoor Ankle Boots', 'https://images-na.ssl-images-amazon.com/images/I/719aiXTBSlL._AC_SL1200_.jpg'),
-- ('Trekking Poles', '1.4lbs', 'Trekking Gear', 'TrailBuddy 2 Trekking Poles', 'https://images-na.ssl-images-amazon.com/images/I/81FjxMsYvrL._AC_SL1500_.jpg'),
-- ('Sun Screen', '3oz', 'Weather Protection', 'Neutrogena 55 SPF', 'https://images-na.ssl-images-amazon.com/images/I/41P0ldAuo0L.jpg'),
-- ('First-Aid', '7.2oz', 'First-Aid and Emergency', '300 pc First-Aid Kit', 'https://images-na.ssl-images-amazon.com/images/I/71oS56rcp0L._AC_SL1200_.jpg'),
-- ('Bear Spray', '7.9oz', 'Protection', 'SABRE Frontiersman Bear Spray', 'https://images-na.ssl-images-amazon.com/images/I/81ksUPYewwL._AC_SL1500_.jpg'),
-- ('Sewing Kit', '.25oz', 'Repair Kit', 'Gear Aid Repait Kit', 'https://images-na.ssl-images-amazon.com/images/I/81FrI%2BcwbjL._AC_SL1500_.jpg');

-- SELECT * FROM gear
-- ORDER BY weight
