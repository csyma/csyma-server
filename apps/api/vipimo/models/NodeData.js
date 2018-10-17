'use strict'

module.exports = (sequelize, DataTypes) => {
	const NodeData = sequelize.define('NodeData', {
		NodeDataId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		DataTime: {
			type: DataTypes.DATE,
			allowNull: false, 
			defaultValue: DataTypes.NOW
		},
		FrameCount: {
			type: DataTypes.INTEGER,
			allowNull: false, 
			defaultValue: 0
		}
	},
	{
		hooks: {
			
		}

	})


	NodeData.associate = function (models) {
		NodeData.belongsTo(models.Gateway, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: false
			}
	    });

	    NodeData.belongsTo(models.Node, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: false
			}
	    });


	    NodeData.belongsTo(models.Digital1, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });

		NodeData.belongsTo(models.Digital2, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });

		NodeData.belongsTo(models.Digital3, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });

		NodeData.belongsTo(models.Digital4, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });

	    NodeData.belongsTo(models.Analog1, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });

		NodeData.belongsTo(models.Analog2, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });

		NodeData.belongsTo(models.Analog3, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });

		NodeData.belongsTo(models.Analog4, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });

	    NodeData.belongsTo(models.Temperature1, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });

		NodeData.belongsTo(models.Temperature2, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });

		NodeData.belongsTo(models.Temperature3, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });

		NodeData.belongsTo(models.Temperature4, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });

	    NodeData.belongsTo(models.Battery, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });

	    

	    NodeData.belongsTo(models.NodeSignal, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: true
			}
	    });





	}



	 return NodeData;
}
