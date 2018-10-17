'use strict'

module.exports = (sequelize, DataTypes) => {
	const Temperature3 = sequelize.define('Temperature3', {
		Temperature3Id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Data: {
			type: DataTypes.INTEGER,
			allowNull: false, 
			defaultValue: 0
		}
	},
	{
		hooks: {
			
		}

	})

	Temperature3.associate = function (models) {
	    Temperature3.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}

	return Temperature3;
}
