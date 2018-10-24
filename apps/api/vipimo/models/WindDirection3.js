'use strict'

module.exports = (sequelize, DataTypes) => {
	const WindDirection3 = sequelize.define('WindDirection3', {
		WindDirection3Id: {
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


	WindDirection3.associate = function (models) {
	    WindDirection3.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return WindDirection3;
}
