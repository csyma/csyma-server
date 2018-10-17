'use strict'

module.exports = (sequelize, DataTypes) => {
	const NodeType = sequelize.define('NodeType', {
		NodeTypeId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Type: {
			type: DataTypes.STRING(16),
			allowNull: false,
			unique:true
		},
		Description: {
			type: DataTypes.STRING(64),
			allowNull: false,
			unique:true
		}

	},
	{
		hooks: {
			
		}

	})


	NodeType.associate = function (models) {
	    NodeType.hasMany(models.Node, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: false
			}
	    });
	}



	 return NodeType;
}
