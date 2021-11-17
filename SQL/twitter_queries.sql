-- Get all tweets from user ID 1
SELECT *
FROM users
LEFT JOIN tweets
ON users.id = tweets.user_id
WHERE users.id = 1;

-- Get just Tweets from user 1
SELECT tweets.tweet
FROM users
LEFT JOIN tweets
ON users.id = tweets.user_id
WHERE users.id = 1;

-- Rename output column 
SELECT tweets.tweet as kobe_tweets
FROM users
LEFT JOIN tweets
ON users.id = tweets.user_id
WHERE users.id = 1;

-- Get user 2's favorite tweets
SELECT first_name, tweet
FROM users
LEFT JOIN faves
ON users.id = faves.user_id
LEFT JOIN tweets
ON faves.tweet_id = tweets.id
WHERE users.id = 2;

-- Get all favorites of user 1 or 2
SELECT first_name, tweet
FROM users
LEFT JOIN faves
ON users.id = faves.user_id
LEFT JOIN tweets
ON faves.tweet_id = tweets.id
WHERE users.id = 1 OR users.id = 2;

-- Get user 1 followers
SELECT users.first_name as followed, users2.first_name as follower
FROM users
LEFT JOIN follows
ON users.id = follows.followed_id
LEFT JOIN users as users2
ON users2.id = follows.follower_id
WHERE users.id = 1;

-- Get users Not following user 2
SELECT *
FROM users
WHERE users.id NOT IN (
SELECT follower_id
FROM follows
WHERE followed_id = 2
) AND users.id != 2;

-- Get COUNT of users following user 1
SELECT users.first_name as user, COUNT(users2.first_name) as follower_count
FROM users
LEFT JOIN follows
ON users.id = follows.followed_id
LEFT JOIN users as users2
ON users2.id = follows.follower_id
WHERE users.id = 1
GROUP BY users.id;

-- LEFT JOIN vs JOIN
-- LEFT JOIN 
SELECT first_name, tweet
FROM users
LEFT JOIN tweets
ON users.id = tweets.user_id;

-- JOIN:
SELECT first_name, tweet
FROM users
JOIN tweets
ON users.id = tweets.user_id;

-- When SQL uses the keyword JOIN, it only includes those records that have matches on both sides. It will omit any records that don't have a 'partner'. 




