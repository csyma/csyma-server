'use strict'

module.exports = (sequelize, DataTypes) => {
	const DigitalState4 = sequelize.define('DigitalState4', {
		DigitalState4Id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Data: {
			type: DataTypes.BOOLEAN,
			allowNull: false, 
			defaultValue: 0
		}
	},
	{
		hooks: {
			
		}

	})


	DigitalState4.associate = function (models) {
	    DigitalState4.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return DigitalState4;
}
