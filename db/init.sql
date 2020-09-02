CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(200),
    password VARCHAR(200)
);

CREATE TABLE backpacks (
    backpack_id SERIAL PRIMARY KEY,
    backpack_weight VARCHAR(300),
    backpack_desciption VARCHAR(500),

);

CREATE TABLE backpack_gear (
    backpack_gear_id SERIAL PRIMARY KEY,
    backpack_id INT REFERENCES backpacks(backpack_id),
    gear_id INT REFERENCES gear(gear_id),
     user_id INT REFERENCES users(user_id)
);

CREATE TABLE gear (
    gear_id SERIAL PRIMARY KEY,
    name VARCHAR(250),
    weight VARCHAR(200),
    unit VARCHAR(100),
    categories VARCHAR(200),
    description VARCHAR(1000),
    image VARCHAR(1000)
);