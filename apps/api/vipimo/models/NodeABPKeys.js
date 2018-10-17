'use strict'

module.exports = (sequelize, DataTypes) => {
	const NodeABPKey = sequelize.define('NodeABPKey', {
		NodeABPKeyId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		AppSKey: {
			type: DataTypes.STRING(32)
		},
		NwkSKey: {
			type: DataTypes.STRING(32)
		}

	},
	{
		hooks: {
			
		}

	})


	NodeABPKey.associate = function (models) {
	  //   NodeABPKey.hasOne(models.Node, {
	  //   	onDelete: "CASCADE",
	  //   	onUpdate: "CASCADE",
			// foreignKey: {
			// 	allowNull: false
			// }
	  //   });
	}



	 return NodeABPKey;
}
