'use strict'

module.exports = (sequelize, DataTypes) => {
	const Temperature4 = sequelize.define('Temperature4', {
		Temperature4Id: {
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

	Temperature4.associate = function (models) {
	    Temperature4.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}

	return Temperature4;
}
