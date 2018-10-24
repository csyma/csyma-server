'use strict'

module.exports = (sequelize, DataTypes) => {
	const Rainfall4 = sequelize.define('Rainfall4', {
		Rainfall4Id: {
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


	Rainfall4.associate = function (models) {
	    Rainfall4.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return Rainfall4;
}
