'use strict'

module.exports = (sequelize, DataTypes) => {
	const Rainfall2 = sequelize.define('Rainfall2', {
		Rainfall2Id: {
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


	Rainfall2.associate = function (models) {
	    Rainfall2.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return Rainfall2;
}
