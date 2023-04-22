BEGIN;

DROP TABLE IF EXISTS users, posts, comments CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(200) NOT NULL,
  avatar VARCHAR(100) DEFAULT 'https://i.ibb.co/16Sm9dH/avatar.png'
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  content TEXT,
  created_at TIMESTAMP DEFAULT current_timestamp,
  user_id INTEGER NOT NULL REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  message VARCHAR(200) NOT NULL,
  created_at TIMESTAMP DEFAULT current_timestamp,
  user_id INTEGER NOT NULL REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
  post_id INTEGER NOT NULL REFERENCES posts(id) ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO users (username, email, password)
VALUES ('Mohammed', 'mohammed@m.com', '$2a$10$AlfHFyavmwNG2U4AApTeF.XBR.7SSEmmc.DWA42NonvWgigGlbqUe'),
      ('Ahmad', 'ahmad@a.com', '$2a$10$fVWSqreMtOlOcuNdUCimuut4Yi1vir8AAwQmrEFKWaFZmb86YxDQG'),
      ('Hadeel', 'hadeel@h.com', '$2a$10$freawBzKw187y3fN7ZSy5ORkqtxSViSxPNEbOM6MlzfY6xJCh8MWa');

INSERT INTO posts (content, user_id)
VALUES ('Node.js is a cross-platform, open-source server environment that can run on Windows, 
        Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, 
        runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.', 1),
      ('Express is a minimal and flexible Node.js web application framework 
      that provides a robust set of features for web and mobile applications.', 3);

INSERT INTO comments (message, user_id, post_id)
VALUES ('Thanks For Your Information.', 3, 1),
      ('Wow, This is useful information.', 2, 1),
      ('Yes This Is Best Concept Of Express Js.', 1, 2);

COMMIT;