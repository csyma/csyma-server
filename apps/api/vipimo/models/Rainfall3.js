'use strict'

module.exports = (sequelize, DataTypes) => {
	const Rainfall3 = sequelize.define('Rainfall3', {
		Rainfall3Id: {
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


	Rainfall3.associate = function (models) {
	    Rainfall3.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return Rainfall3;
}
