'use strict'

module.exports = (sequelize, DataTypes) => {
	const Humidity4 = sequelize.define('Humidity4', {
		Humidity4Id: {
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


	Humidity4.associate = function (models) {
	    Humidity4.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return Humidity4;
}
