'use strict'

module.exports = (sequelize, DataTypes) => {
	const Pressure3 = sequelize.define('Pressure3', {
		Pressure3Id: {
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


	Pressure3.associate = function (models) {
	    Pressure3.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return Pressure3;
}
