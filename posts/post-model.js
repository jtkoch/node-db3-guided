const db = require("../data/config")

function findByUserId(userId) {
  return db("posts") // FROM posts 
    .leftJoin("users", "users.id", "posts.user_id") // LEFT JOIN users ON users.id = posts.user_id
    .where("user_id", userId) // WHERE user_id = ?
    .select("posts.id", "posts.contents", "users.username") // SELECT posts.id, posts.contents, users.username
}

module.exports = {
  findByUserId,
}