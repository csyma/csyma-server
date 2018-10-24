'use strict'

module.exports = (sequelize, DataTypes) => {
	const WindDirection1 = sequelize.define('WindDirection1', {
		WindDirection1Id: {
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

	WindDirection1.associate = function (models) {
	    WindDirection1.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}

	return WindDirection1;
}
