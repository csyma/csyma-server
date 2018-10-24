'use strict'

module.exports = (sequelize, DataTypes) => {
	const Pressure2 = sequelize.define('Pressure2', {
		Pressure2Id: {
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


	Pressure2.associate = function (models) {
	    Pressure2.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return Pressure2;
}
