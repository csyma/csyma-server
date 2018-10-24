'use strict'

module.exports = (sequelize, DataTypes) => {
	const WindSpeed4 = sequelize.define('WindSpeed4', {
		WindSpeed4Id: {
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


	WindSpeed4.associate = function (models) {
	    WindSpeed4.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return WindSpeed4;
}
