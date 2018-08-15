'use strict'
module.exports = (sequelize, DataTypes) => {
	const MemberRoles = sequelize.define('MemberRoles', {
		RolesofMemberId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		}

	},
	{
		hooks: {
			
		}

	})

	 return MemberRoles;
}
