'use strict'

module.exports = (sequelize, DataTypes) => {
	const NodeEncoding = sequelize.define('NodeEncoding', {
		NodeEncodingId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Encoding: {
			type: DataTypes.STRING(16),
			allowNull: false,
			unique:true
		}

	},
	{
		hooks: {
			
		}

	})


	NodeEncoding.associate = function (models) {
	    NodeEncoding.hasMany(models.Node, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: false
			}
	    });
	}



	 return NodeEncoding;
}
