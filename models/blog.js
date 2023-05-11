const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
        blog_name: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        author_name: {
            type: DataTypes.STRING,
            allowNull:false,
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog'
    }
);

module.exports = Blog