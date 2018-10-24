'use strict'

module.exports = (sequelize, DataTypes) => {
	const WindDirection2 = sequelize.define('WindDirection2', {
		WindDirection2Id: {
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


	WindDirection2.associate = function (models) {
	    WindDirection2.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return WindDirection2;
}
