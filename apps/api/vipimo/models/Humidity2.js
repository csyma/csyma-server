'use strict'

module.exports = (sequelize, DataTypes) => {
	const Humidity2 = sequelize.define('Humidity2', {
		Humidity2Id: {
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


	Humidity2.associate = function (models) {
	    Humidity2.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return Humidity2;
}
