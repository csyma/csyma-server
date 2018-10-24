'use strict'

module.exports = (sequelize, DataTypes) => {
	const Pressure1 = sequelize.define('Pressure1', {
		Pressure1Id: {
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


	Pressure1.associate = function (models) {
	    Pressure1.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return Pressure1;
}
