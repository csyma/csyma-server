'use strict'

module.exports = (sequelize, DataTypes) => {
	const NodeTechnology = sequelize.define('NodeTechnology', {
		NodeTechnologyId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Technology: {
			type: DataTypes.STRING(16),
			allowNull: false,
			unique:true
		}

	},
	{
		hooks: {
			
		}

	})


	NodeTechnology.associate = function (models) {
	    NodeTechnology.hasMany(models.Node, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: false
			}
	    });
	}



	 return NodeTechnology;
}
