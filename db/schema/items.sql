DROP TABLE IF EXISTS items CASCADE;

CREATE TABLE items (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  image VARCHAR(225),
  price INTEGER,
  days INTEGER,
  description TEXT,
  latitudes DECIMAL,
  longitudes DECIMAL, 
  cart_id INTEGER REFERENCES  
);