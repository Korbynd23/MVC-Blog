const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    title: DataTypes.STRING,
    text: DataTypes.STRING
  },
  {
    sequelize,
  }
);

module.exports = Comment;
