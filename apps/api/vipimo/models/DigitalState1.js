'use strict'

module.exports = (sequelize, DataTypes) => {
	const DigitalState1 = sequelize.define('DigitalState1', {
		DigitalState1Id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Data: {
			type: DataTypes.FLOAT,
			allowNull: false, 
			defaultValue: 0
		}
	},
	{
		hooks: {
			
		}

	})

	DigitalState1.associate = function (models) {
	    DigitalState1.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}

	return DigitalState1;
}
