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
          
          user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {model: "users",
            key: "id"
            }
          },
        
        blog_name: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        author_name: {
            type: DataTypes.STRING,
            allowNull:false,
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