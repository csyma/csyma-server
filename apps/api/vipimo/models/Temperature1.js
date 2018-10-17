'use strict'

module.exports = (sequelize, DataTypes) => {
	const Temperature1 = sequelize.define('Temperature1', {
		Temperature1Id: {
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

	Temperature1.associate = function (models) {
	    Temperature1.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}

	return Temperature1;
}
