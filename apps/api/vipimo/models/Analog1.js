'use strict'

module.exports = (sequelize, DataTypes) => {
	const Analog1 = sequelize.define('Analog1', {
		Analog1Id: {
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

	Analog1.associate = function (models) {
	    Analog1.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}

	return Analog1;
}
