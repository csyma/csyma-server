'use strict'

module.exports = (sequelize, DataTypes) => {
	const DigitalState3 = sequelize.define('DigitalState3', {
		DigitalState3Id: {
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


	DigitalState3.associate = function (models) {
	    DigitalState3.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return DigitalState3;
}
