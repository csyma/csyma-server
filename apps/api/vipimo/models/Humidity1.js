'use strict'

module.exports = (sequelize, DataTypes) => {
	const Humidity1 = sequelize.define('Humidity1', {
		Humidity1Id: {
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


	Humidity1.associate = function (models) {
	    Humidity1.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return Humidity1;
}
