'use strict'

module.exports = (sequelize, DataTypes) => {
	const Gateway = sequelize.define('Gateway', {
		GatewayId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		MAC: {
			type: DataTypes.STRING(32),
			allowNull: false,
			unique:true
		},
		Enabled: {
			type:DataTypes.BOOLEAN,
			allowNull: false, 
			defaultValue: true
		},
		LastSeen: {
			type:DataTypes.DATE,
			allowNull: false, 
			defaultValue: DataTypes.NOW
		},
		IP: {
			type:DataTypes.STRING(15),
			allowNull: false, 
			defaultValue: '10'
		},
		HumanReadable: {
			type:DataTypes.STRING(8),
			allowNull: false, 
			defaultValue: '10'
		},
		Location: {
			type:DataTypes.STRING(16),
			allowNull: false, 
			defaultValue: 'Office'
		},

	},
	{
		hooks: {
			
		}

	})

	// Gateway.associate = function (models) {
	//     Gateway.hasOne(models.GatewayType, {
	//     	onDelete: "CASCADE",
	//     	onUpdate: "CASCADE",
	// 		foreignKey: {
	// 			allowNull: false
	// 		}
	//     });
	// }

	Gateway.associate = function (models) {
	    Gateway.belongsTo(models.GatewayType, {
	    	onDelete: "CASCADE",
	      foreignKey: {
	        allowNull: false
			}
	    });

	    Gateway.hasMany(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: false
			}
	    });

	}


// NodeSource.associate = function (models) {
// 	    NodeSource.hasMany(models.Node, {
// 	    	onDelete: "CASCADE",
// 	    	onUpdate: "CASCADE",
// 			foreignKey: {
// 				allowNull: false
// 			}
// 	    });
// 	}


	// AllAppGroup.associate = function (models) {
	//     AllAppGroup.hasMany(models.AppGroup, {
	//     	onDelete: "CASCADE",
	//     	onUpdate: "CASCADE",
	// 		foreignKey: {
	// 			allowNull: false
	// 		}
	//     });
	// }



	 return Gateway;
}
