/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  const Post = sequelize.define('Post', {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'post_id'
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'description'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'category_id'
    },
    timeNeeded: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'time_needed'
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'is_deleted'
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      field: 'created_at'
    }

  }, {
    tableName: 'post',
  });
  Post.associate = function (models) {
    // models.Post.belongsTo(models.User, {
    //   onDelete: "CASCADE",
    //   foreignKey: {
    //     allowNull: false
    //   }
    // });
    models.Post.hasMany(models.Like, {
      foreignKey: "post_id"
    });
    models.Post.hasMany(models.Comment, {
      foreignKey: "post_id"
    });
    models.Post.hasMany(models.Step, {
      foreignKey: "post_id"
    });
    models.Post.hasMany(models.Ingredient, {
      foreignKey: "post_id"
    });
    models.Post.hasMany(models.Image, {
      foreignKey: "post_id"
    });
  }
  return Post;
};
