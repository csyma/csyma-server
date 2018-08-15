'use strict'

// All apps have all groups...

module.exports = (sequelize, DataTypes) => {
	const AllAppGroup = sequelize.define('AllAppGroup', {
		GroupId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Group: {
			type: DataTypes.STRING, 
			allowNull: false,
			unique:true,
            validate: {
            	 len: {
                    args: [3, 32],
                    msg: 'Please give us a group app name'
                }
            }
		}
	},
	{
		hooks: {
			
		}

	})


	AllAppGroup.associate = function (models) {
	    AllAppGroup.hasMany(models.AppGroup, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: false
			}
	    });
	}



	 return AllAppGroup;
}
