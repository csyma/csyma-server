'use strict'

module.exports = (sequelize, DataTypes) => {
	const Analog2 = sequelize.define('Analog2', {
		Analog2Id: {
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


	Analog2.associate = function (models) {
	    Analog2.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return Analog2;
}
