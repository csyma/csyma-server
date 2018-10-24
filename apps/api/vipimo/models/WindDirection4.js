'use strict'

module.exports = (sequelize, DataTypes) => {
	const WindDirection4 = sequelize.define('WindDirection4', {
		WindDirection4Id: {
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


	WindDirection4.associate = function (models) {
	    WindDirection4.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return WindDirection4;
}
