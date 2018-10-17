'use strict'

module.exports = (sequelize, DataTypes) => {
	const Digital2 = sequelize.define('Digital2', {
		Digital2Id: {
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


	Digital2.associate = function (models) {
	    Digital2.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return Digital2;
}
