'use strict'

module.exports = (sequelize, DataTypes) => {
	const Digital4 = sequelize.define('Digital4', {
		Digital4Id: {
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


	Digital4.associate = function (models) {
	    Digital4.hasOne(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });	
	}





	 return Digital4;
}
