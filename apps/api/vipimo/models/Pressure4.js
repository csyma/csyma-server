'use strict'

module.exports = (sequelize, DataTypes) => {
	const Pressure4 = sequelize.define('Pressure4', {
		Pressure4Id: {
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


	Pressure4.associate = function (models) {
	    Pressure4.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return Pressure4;
}
