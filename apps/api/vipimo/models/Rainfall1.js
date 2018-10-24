'use strict'

module.exports = (sequelize, DataTypes) => {
	const Rainfall1 = sequelize.define('Rainfall1', {
		Rainfall1Id: {
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

	Rainfall1.associate = function (models) {
	    Rainfall1.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}

	return Rainfall1;
}
