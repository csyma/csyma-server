'use strict'

module.exports = (sequelize, DataTypes) => {
	const GatewayType = sequelize.define('GatewayType', {
		GatewayTypeId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Type: {
			type: DataTypes.STRING(32),
			allowNull: false,
			unique:true
		},
		Channels: {
			type:DataTypes.ENUM('Single', 'Multi') ,
			allowNull: false, 
			defaultValue: 'Single'
		}

	},
	{
		hooks: {
			
		}

	})


	GatewayType.associate = function (models) {
	    GatewayType.hasMany(models.Gateway, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: false
			}
	    });
	}



	 return GatewayType;
}
