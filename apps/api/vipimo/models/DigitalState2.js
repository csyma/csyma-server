'use strict'

module.exports = (sequelize, DataTypes) => {
	const DigitalState2 = sequelize.define('DigitalState2', {
		DigitalState2Id: {
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


	DigitalState2.associate = function (models) {
	    DigitalState2.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return DigitalState2;
}
