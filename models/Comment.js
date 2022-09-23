const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    comment_title: DataTypes.STRING,
    comment_text: DataTypes.STRING
  },
  {
    sequelize,
  },
  {
    freezeTableName: true,
  }
);

module.exports = Comment;
