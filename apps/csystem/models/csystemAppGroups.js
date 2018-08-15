'use strict'
module.exports = (sequelize, DataTypes) => {
	const AppGroup = sequelize.define('AppGroup', {
		AppGroupId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		// Group: {
		// 	type: DataTypes.STRING, 
		// 	allowNull: false,
  //           validate: {
  //           	 len: {
  //                   args: [3, 32],
  //                   msg: 'Please give us a valid app name'
  //               }
  //           }
		// },

		Enabled: {
			type:DataTypes.ENUM('free', 'restricted'),
			defaultValue: 'free',
			allowNull: false, 
		},
		canUninstall: {
			type:DataTypes.BOOLEAN,
			allowNull: false, 
			defaultValue: false
		}
	},
	{
		hooks: {
			
		}

	})


	AppGroup.associate = function (models) {
	    AppGroup.hasMany(models.AppUser, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: false
			}
	    });

	  //   AppGroup.hasMany(models.App, {
	  //   	onDelete: "CASCADE",
	  //   	onUpdate: "CASCADE",
			// foreignKey: {
			// 	allowNull: false
			// }
	  //   });

	    AppGroup.hasMany(models.AppFamilyMember, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: false
			}
	    });
	}


	 return AppGroup;
}
