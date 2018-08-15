'use strict'
module.exports = (sequelize, DataTypes) => {
	const AppFamily = sequelize.define('AppFamily', {
		AppFamilyId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Installed: {
			type:DataTypes.BOOLEAN,
			allowNull: false, 
			defaultValue: false
		},
		CanUninstalled: {
			type:DataTypes.BOOLEAN,
			allowNull: false, 
			defaultValue: true
		},
	},
	{
		hooks: {
			
		}

	})

	 return AppFamily;
}
