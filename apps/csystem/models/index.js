'use strict'
// const fs = require('fs')
const fse = require('fs-extra');
const path = require('path')
const Sequelize = require('sequelize')

//how to load this config file
const globalConfig = require(__dirname+'/../../../config/config.system');

const db = {}

const whichDB = globalConfig.get('/databaseType');

const sequelize = new Sequelize(
	globalConfig.get(`/database/${whichDB}/DBNAME`),
	globalConfig.get(`/database/${whichDB}/USER`),
	globalConfig.get(`/database/${whichDB}/PASS`),
	{
		dialect: globalConfig.get('/databaseType'),
		host: globalConfig.get(`/database/${whichDB}/HOST`),
		port: globalConfig.get(`/database/${whichDB}/PORT`) || 3306,
		logging: false
	} 

)

/*
 * read all folders in apps
 * 		go to their models folders and load all the models
 */
fse
.readdirSync(__dirname+'/../../')
.forEach((file)=>{
	const appFolder = path.join(__dirname+'/../../', file, 'models')
	try
	{
		fse
		.readdirSync(appFolder)
		.filter((modelfile) =>
			modelfile !=='index.js'
		)
		.forEach((modelfile)=>{
			try
			{
				let model = sequelize.import(path.join(appFolder, modelfile))
				db[model.name] = model
			}catch(error)
			{
				console.log(`error reading model: ${error}`)
			}		
		})
	}catch(err){}
	
	
})

// Object.keys(db).forEach(function (modelName) {
// 	if('associate' in db[modelName]){
// 		db[modelName].associate(db)
// 	}
// })

db.sequelize = sequelize
db.Sequelize= Sequelize




module.exports = db