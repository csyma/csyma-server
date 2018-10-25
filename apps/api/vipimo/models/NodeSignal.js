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
		},
		frequency: {
			// type: DataTypes.ENUM('868.1','868.3','868.5','867.1','867.3','867.5','867.7','867.9','869.525')
			type: DataTypes.FLOAT
			// allowNull: false
		},
		bandwidth: {
			type: DataTypes.ENUM('125','250','500'),
			allowNull: false
		},
		spreadingFactor: {
			type: DataTypes.ENUM('12','11','10','9','8','7'),
			allowNull: false
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

	    NodeSignal.hasOne(models.UnregistredNode, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return NodeSignal;
}
