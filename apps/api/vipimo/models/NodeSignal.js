'use strict'

module.exports = (sequelize, DataTypes) => {
	const NodeSignal = sequelize.define('NodeSignal', {
		NodeSignalId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		RSSI: {
			type: DataTypes.INTEGER,
			allowNull: false, 
			defaultValue: 0
		},
		SNR: {
			type: DataTypes.INTEGER,
			allowNull: false, 
			defaultValue: 0
		}
	},
	{
		hooks: {
			
		}

	})


	NodeSignal.associate = function (models) {
	    NodeSignal.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return NodeSignal;
}
