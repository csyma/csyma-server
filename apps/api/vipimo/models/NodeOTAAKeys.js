'use strict'

module.exports = (sequelize, DataTypes) => {
	const NodeOTAAKey = sequelize.define('NodeOTAAKey', {
		NodeOTAAKeyId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		AppEUI: {
			type: DataTypes.STRING(16)
		},
		AppKey: {
			type: DataTypes.STRING(32)
		}
		,
		DevEUI: {
			type: DataTypes.STRING(16)  // check
		}

	},
	{
		hooks: {
			
		}

	})


	NodeOTAAKey.associate = function (models) {
	  //   NodeOTAAKey.hasOne(models.Node, {
	  //   	onDelete: "CASCADE",
	  //   	onUpdate: "CASCADE",
			// foreignKey: {
			// 	allowNull: false
			// }
	  //   });
	}



	 return NodeOTAAKey;
}
