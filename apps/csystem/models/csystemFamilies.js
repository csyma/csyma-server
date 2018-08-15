'use strict'
module.exports = (sequelize, DataTypes) => {
	const Familie = sequelize.define('Familie', {
		FamilyId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		FamilyName: {
			type: DataTypes.STRING, 
			allowNull: false,
			unique:true,
            validate: {
            	 len: {
                    args: [3, 32],
                    msg: 'Please give us a valid family name'
                }
            }
		},
		Ownedby: {
			type:DataTypes.ENUM('Family', 'Individual'),
			defaultValue: 'Family'
		},
	},
	{
		hooks: {
			
		}

	})


	Familie.associate = function (models) {
	    Familie.hasMany(models.FamilieMember, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: false
			}
	    });

	    Familie.hasMany(models.FamilyRole, {
	    	onDelete: "CASCADE",
	    	onUpdate: "CASCADE",
			foreignKey: {
				allowNull: false
			}
	    });

	  //   Familie.hasOne(models.AppFamily, {  // which app created it
	  //   	onDelete: "CASCADE",
	  //   	onUpdate: "CASCADE",
			// foreignKey: {
			// 	allowNull: false
			// }
	  //   });
	}

	 return Familie;
}
