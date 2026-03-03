-- Test Users
INSERT INTO users (email, password_hash, role) VALUES
('owner@test.com', 'hashed_password_1', 'owner'),
('buyer@test.com', 'hashed_password_2', 'buyer');

-- Test Website
INSERT INTO websites (user_id, domain) VALUES
(1, 'teststore.com');
