'use strict'

module.exports = (sequelize, DataTypes) => {
	const WindSpeed1 = sequelize.define('WindSpeed1', {
		WindSpeed1Id: {
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

	WindSpeed1.associate = function (models) {
	    WindSpeed1.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}

	return WindSpeed1;
}
