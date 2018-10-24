'use strict'

module.exports = (sequelize, DataTypes) => {
	const WindSpeed3 = sequelize.define('WindSpeed3', {
		WindSpeed3Id: {
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


	WindSpeed3.associate = function (models) {
	    WindSpeed3.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return WindSpeed3;
}
