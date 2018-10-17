'use strict'

module.exports = (sequelize, DataTypes) => {
	const Analog4 = sequelize.define('Analog4', {
		Analog4Id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Data: {
			type: DataTypes.INTEGER,
			allowNull: false, 
			defaultValue: 0
		}
	},
	{
		hooks: {
			
		}

	})


	Analog4.associate = function (models) {
	    Analog4.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return Analog4;
}
