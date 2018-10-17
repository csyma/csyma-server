'use strict'

module.exports = (sequelize, DataTypes) => {
	const NodeSource = sequelize.define('NodeSource', {
		NodeSourceId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Source: {
			type: DataTypes.STRING(16),
			allowNull: false,
			unique:true
		}

	},
	{
		hooks: {
			
		}

	})


	NodeSource.associate = function (models) {
	    NodeSource.hasMany(models.Node, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: false
			}
	    });
	}



	 return NodeSource;
}
