'use strict'

module.exports = (sequelize, DataTypes) => {
	const Humidity3 = sequelize.define('Humidity3', {
		Humidity3Id: {
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


	Humidity3.associate = function (models) {
	    Humidity3.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return Humidity3;
}
