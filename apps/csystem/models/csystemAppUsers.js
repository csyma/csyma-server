'use strict'
module.exports = (sequelize, DataTypes) => {
	const AppUser = sequelize.define('AppUser', {
		AppUserId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		// AppName: {
		// 	type: DataTypes.STRING, 
		// 	allowNull: false,
  //           validate: {
  //           	 len: {
  //                   args: [3, 32],
  //                   msg: 'Please give us a valid app name'
  //               }
  //           }
		// },
		Installed: {
			type:DataTypes.BOOLEAN,
			allowNull: false, 
			defaultValue: false
		},
		// CanUninstalled: {
		// 	type:DataTypes.BOOLEAN,
		// 	allowNull: false, 
		// 	defaultValue: true
		// },
	},
	{
		hooks: {
			
		}

	})

	 return AppUser;
}
