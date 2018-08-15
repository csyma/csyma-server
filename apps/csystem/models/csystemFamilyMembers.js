'use strict'
module.exports = (sequelize, DataTypes) => {
	const FamilieMember = sequelize.define('FamilieMember', {
		FamilyMemberId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		}
	},
	{
		hooks: {
			
		}

	})

	FamilieMember.associate = function (models) {
	    FamilieMember.hasMany(models.AppFamilyMember, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: false
			}
	    });

	    FamilieMember.hasMany(models.MemberRoles, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: false
			}
	    });
	}

	 return FamilieMember;
}
