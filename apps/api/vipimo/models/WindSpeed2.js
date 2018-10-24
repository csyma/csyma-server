'use strict'

module.exports = (sequelize, DataTypes) => {
	const WindSpeed2 = sequelize.define('WindSpeed2', {
		WindSpeed2Id: {
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


	WindSpeed2.associate = function (models) {
	    WindSpeed2.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return WindSpeed2;
}
