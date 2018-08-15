'use strict'
module.exports = (sequelize, DataTypes) => {
	const AppFamilyMember = sequelize.define('AppFamilyMember', {
		AppFamilyMemberId: {
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

	 return AppFamilyMember;
}
