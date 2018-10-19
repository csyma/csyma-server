'use strict'

module.exports = (sequelize, DataTypes) => {
	const UnregistredNode = sequelize.define('UnregistredNode', {
		UnregistredNodeId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		NodeAddr: {
			type: DataTypes.STRING(8),
			allowNull: false,
			unique:false
		},
		Data: {
			type: DataTypes.STRING(64),
			allowNull: false,
		}
	},
	{
		hooks: {
			
		}

	})

	UnregistredNode.associate = function (models) {
		UnregistredNode.belongsTo(models.Gateway, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: false
			}
	    });
	    

	    UnregistredNode.belongsTo(models.NodeSignal, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });
	}





	 return UnregistredNode;
}
