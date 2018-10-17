'use strict'

module.exports = (sequelize, DataTypes) => {
	const Temperature2 = sequelize.define('Temperature2', {
		Temperature2Id: {
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

	Temperature2.associate = function (models) {
	    Temperature2.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}

	return Temperature2;
}
