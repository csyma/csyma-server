'use strict'
module.exports = (sequelize, DataTypes) => {
	const FamilyRole = sequelize.define('FamilyRole', {
		RoleId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Role: {
			type: DataTypes.STRING, 
			allowNull: false,
			unique:true,
            validate: {
            	 len: {
                    args: [3, 32],
                    msg: 'Please give us a valid role'
                }
            }
		}
	},
	{
		hooks: {
			
		}

	})

	FamilyRole.associate = function (models) {
	    FamilyRole.hasMany(models.MemberRoles, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: false
			}
	    });
	}

	 return FamilyRole;
}
