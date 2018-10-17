'use strict'

module.exports = (sequelize, DataTypes) => {
	const Node = sequelize.define('Node', {
		NodeId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		NodeAddr: {
			type: DataTypes.STRING(8),
			allowNull: false,
			unique:true
		},
		Activation: {
			type:DataTypes.ENUM('OTAA', 'ABP') ,
			allowNull: false, 
			defaultValue: 'ABP'
		},
		AppSKey: {
			type: DataTypes.STRING(32),
			allowNull: false, 
			defaultValue: '112233445566778899AABBCCDDEEFF3A'
		},
		NwkSKey: {
			type: DataTypes.STRING(32),
			allowNull: false, 
			defaultValue: '0A1B2C3D4E5F0A1B2C3D4E5F0A1B2C3A'
		},
		AppEUI: {
			type: DataTypes.STRING(16),
			allowNull: false, 
			defaultValue: '1122334455667788'
		},
		AppKey: {
			type: DataTypes.STRING(32),
			allowNull: false, 
			defaultValue: '0A1B2C3D4E5F0A1B2C3D4E5F0A1B2C3A'
		}
		,
		DevEUI: {
			type: DataTypes.STRING(16),
			allowNull: false, 
			defaultValue: '1122334455667788'
		}


	},
	{
		hooks: {
			
		}

	})

	Node.associate = function (models) {
	    Node.belongsTo(models.NodeEncoding, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: false
			}
	    });

	    Node.belongsTo(models.NodeTechnology, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: false
			}
	    });

	    Node.belongsTo(models.NodeSource, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: false
			}
	    });

	    Node.belongsTo(models.NodeType, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: false
			}
	    });

		// Node.belongsTo(models.NodeABPKey, {
		//     	onDelete: "CASCADE",
		//     	onUpdate: "CASCADE",
		// 		foreignKey: {
		// 			allowNull: false
		// 		}
		//     });

		// Node.belongsTo(models.NodeOTAAKey, {
		//     	onDelete: "CASCADE",
		//     	onUpdate: "CASCADE",
		// 		foreignKey: {
		// 			allowNull: false
		// 		}
		    // });

	    Node.hasMany(models.NodeData, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: false
			}
	    });	

	}



	 return Node;
}
