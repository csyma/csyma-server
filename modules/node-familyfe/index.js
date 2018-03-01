/*
 *
 * Node Implementation of Familyfe @ https://github.com/csybersystems/familyfe
 * Author: 	Brian Onang'o
 * Date: 	October 2017
 * Company: Csyber Systems
 * Website: https://csybersytems.cseco.co.ke 
 * Github: 	https://github.com/csybersystems/node-familyfe
 */

'use strict'
// const Async = require('async');
// const MongoModels = require('mongo-models');
const validator = require('validator');
const  Objlen = require('object-length');
const sentenceCase = require('sentence-case');
const Bcrypt = require('bcrypt');
const to = require('await-to-js').to;
// const {ObjectId} = require('mongodb');
// const safeObjectId = s => ObjectId.isValid(s) ? new ObjectId(s) : null;


/*
 * Familyfe class
 */
class familyfe
{

	constructor(sequelize)
	{
		let self = this;
		self.sequelize = sequelize
		// self.MongoModels = MongoModels;
		// self.
	}
    connect(callback)
    {
    	let self = this;
    	self.dbDriver = process.env.DBDRIVER || "mongo"
    	let dbDriver = self.dbDriver
    	switch(dbDriver)
		{
		  case "mysql":
		  	const mysql_d = require("./drivers/mysql")
		    break;
		  case "mongo": //mongo is default
		  default:
		    const mongo_d = new (require("./drivers/mongo")) (function(){
		    	callback();
		    })
		    
		}
    }
    setCollection(collection)
    {
    	this.MongoModels.collection = collection;
    	this.collection = collection
    }

    generatePasswordHash(password, callback) {

        Async.auto({
            salt: function (done) {

                Bcrypt.genSalt(10, done);
            },
            hash: ['salt', function (results, done) {

                Bcrypt.hash(password, results.salt, done);
            }]
        }, (err, results) => {

            if (err) {
                return callback(err);
            }

            callback(null, {
                password,
                hash: results.hash
            });
        });
    }

    extend(val, ery)
    {
    	let extended = {}
    	let index = 0;
    	let keyisNumeric = true;
    	for(let key in val)
    	{
    		keyisNumeric = parseInt(key).toString() === "NaN"?false:true;
    		keyisNumeric === true?extended[index++] = val[key]:extended[key] = val[key];
    	}
    	for(let key in ery)
    	{
    		keyisNumeric = parseInt(key).toString() === "NaN"?false:true;
    		let bri = JSON.parse(JSON.stringify(ery))
    		if(typeof bri[key] == "object")
    		{
    			try
    			{
    				let tmp = this.extend(extended[key], ery[key])
    				keyisNumeric === true?extended[index++] = tmp:extended[key] = tmp;
    			}catch(err)
    			{
    				keyisNumeric === true?extended[index++] = ery[key]:extended[key] = ery[key];
    			}
    		}	
    		else keyisNumeric === true?extended[index++] = ery[key]:extended[key] = ery[key];
    	}


    	return extended;
    }

    join(obj, joiner)
    {
    	let joined = "";
    	let count = 0
    	for(let i in obj)
    	{
    		if(count === 0)joined = obj[i];
    		else joined += joiner+obj[i];
    		count++
    	}
    	return joined;
    }

}

class abstractWorld
{
	constructor()
	{
		
	}

	destroy(callback)
	{
		let self = this		
		self.Familyfe.MongoModels.collection = self.Familyfe.collection
		self.Familyfe.MongoModels.deleteMany(callback);
	}
}

class abstractPerson extends abstractWorld
{
	constructor()
	{
		super();
	}
}

class Person extends abstractPerson
{
	constructor(sequelize)
	{
		super();
		let self = this;
		self.attributes = ['uid', 'Name', 'Email']
		self.sequelize = sequelize

	}

	addEmails(person, Emails)
	{
		let self = this;
		let emails = person.Contacts.Email
		let newEmails = {}
		let emailcount = Objlen(emails)
		let j = 0;
		for(let i in emails)newEmails[j++] = emails[i];

		let emailsToAdd = {}
		if(typeof Emails == "object")
			for(let i in Emails)newEmails[j++] = Emails[i];
		else
			if(typeof Emails == "string")
				newEmails[j] = Emails;

		person.Contacts.Email = newEmails;
		return person
	}

	setAttributes(person)
	{

		let self = this
		person.Username = (person.Username !== null && person.Username !== undefined)?sentenceCase(person.Username):person.Email.toLowerCase();
        person.Email = person.Email.toLowerCase();
        person.Gender = sentenceCase(person.Gender);
        person.Name = {
            first: (person.Name.split(" ")[0] !== undefined)?sentenceCase(person.Name.split(" ")[0]):"",
            middle: (person.Name.split(" ")[1] !== undefined)?sentenceCase(person.Name.split(" ")[1]):"",
            last: (person.Name.split(" ")[2] !== undefined)?sentenceCase(person.Name.split(" ")[2]):"",
            other: (person.Name.split(" ")[3] !== undefined)?sentenceCase(person.Name.split(" ")[3]):"",
        }
        person = self.addEmails(person, [person.Email])
        self.Attributes = person
		return person
	}

	fullName()
	{
		let self = this
		let fullName = self.familyfe.join(self.Attributes.Name, " ")
		self.Attributes.name = fullName
		/*
		 * backward compatibility
		 */
		self.Attributes.email = self.Attributes.Email
		return fullName
	}

	addFamily(family)
	{
		let self = this
		let familyid = family._id;
		let newFamily = {Families:{0:familyid}}
		let person = self.familyfe.extend(self.Attributes, newFamily)
		self.Attributes = person;
		return person;
	}

	save(callback)
	{
		let self = this
		let person = self.Attributes		 
		self.Familyfe.MongoModels.collection = self.Familyfe.collection
		self.Familyfe.MongoModels.deleteOne({_id:person._id}, function(err, results){
			self.Familyfe.MongoModels.insertOne(person, callback);
		});
		
	}

	async common(options, action)
	{
		let self = this;
		let [err, care, dontcare] = [];
		switch(action)
		{
			case "which":
				;[err, care] = await to(self.sequelize.models.User.findOne({where: options, attributes:self.attributes} ))
				break;
			case "update":
				;[err, care] = await to(self.sequelize.models.User.update(options, {where: {uid:options.uid}}))
				break;
			case "destroy":
				;[err, care] = await to(self.sequelize.models.User.destroy( {where: {uid:options.uid}}))
				break;
				
		}
		if(err)return Promise.reject({msg:err.msg||err, code:err.code||422, status:422})
		care = care || {}
		return JSON.parse(JSON.stringify(care))
	}

	/*
	 * Check if user exists
	 */
	async which(options) {
		let self = this;
		let [err, care, dontcare] = [];
		;[err, care] = await to(self.common(options, "which"))
		if(err)return Promise.reject({msg:err.msg||err, code:err.code||422, status:422})
		return care;
	}

	async update(options) {
		let self = this;
		let [err, care, dontcare] = [];
		;[err, care] = await to(self.common(options, "update"))
		if(err)return Promise.reject({msg:err.msg||err, code:err.code||422, status:422})
		return care;
	}

	async destroy(options) {
		let self = this;
		let [err, care, dontcare] = [];
		;[err, care] = await to(self.common(options, "destroy"))
		if(err)return Promise.reject({msg:err.msg||err, code:err.code||422, status:422})
		return care;
	}


	async beget(person)
	{
		let self = this;
		let [err, care, dontcare] = [];
		;[err, care] = await to(self.sequelize.models.User.create(person))

		if(err) {
			let {a} = err.message || err.msg
			return Promise.reject({msg:err.msg||err.errors[0].message||err.message||err, code:err.code||422, status:422})
		}

		return JSON.parse(JSON.stringify(care));
	}

	identify(options, callback)
	{
		let self = this;
		options.Email === undefined? options.Email = "":false;
		let errors = {}
		validator.isEmpty(options.Email)===true?errors["Email"] = {err:"Please enter email to log in."}:false;;
		let len = Objlen(errors)		
		if(len > 0)	return callback(errors, false)

		self.familyfe.MongoModels.collection = self.familyfe.collection
		self.familyfe.MongoModels.findOne({Email:options.Email}, function(err, user){
			if(err || user === null || Objlen(user) < 1)
			{
				errors["email"] = {err:"Email not found"};
				return callback(errors, false);
			}
			self.__comparepassword({user:user, Password:options.Password}, function(err, isMatch){
				if(err || isMatch === false)
				{
					errors["password"] = {err:"Wrong password."};
					return callback(errors, false)
				}
				self.isActive({user:user}, function(err, active){
					if(active === false)
					{
						errors["person"] =  {err:"Person is disabled. Please activate."};
						return callback(errors, false)
					}
					user.id = user._id;
					return callback(null, user)//no errors
				})
			})
			
		});
	}

	__comparepassword(options, callback)
	{
		let password = options.Password,
			user = options.user;
		console.log(options)
		Async.auto({
            start: function (dones) {
                let syspass = JSON.parse(JSON.stringify(user)).Password;
                Bcrypt.compare(password, syspass,dones);
            }
        }, (err, results) => {

        	if(err)return callback(err, false)
            callback(err, results.start);
            
        });
	}

	isActive(options, callback)
	{
		let user = options.user;

		callback(null, user.IsActive);
	}

}

class abstractFamily extends abstractWorld
{
	constructor()
	{
		super();
	}

	extendFamilyRoles(oldRoles, NewRoles)
	{
		let tmpobj = {}
		let roles = []
		for(let i in oldRoles)tmpobj[oldRoles[i]] = true;
		for(let i in NewRoles)tmpobj[NewRoles[i]] = true;
		for(let role in tmpobj)roles.push(role)
		return roles;
	}
}

class Family extends abstractFamily
{
	constructor(sequelize)
	{
		super();
		let self = this;
		self.sequelize = sequelize
	}

	create(options, callback)		
	{
		let self = this;
		let errors = {};
		let members = options.Members 			//don't change the keys
		options = self.Familyfe.extend(self.DefaultAttributes, options)
		options.Members = members
		self.Familyfe.MongoModels.collection = self.Familyfe.collection
		self.Familyfe.MongoModels.find({_id:options._id}, function(err, results){
			let len = Objlen(results)
			if(err || len < 1)
			{
				if(options.New === true)
				{
					delete options._id;
					delete options.New
				}
				self.Attributes = JSON.parse(JSON.stringify(options))
				delete options.Members;				
				let doc = options
				self.Familyfe.MongoModels.collection = self.Familyfe.collection
				self.Familyfe.MongoModels.insertOne(doc, function(err, results){
					if(err)
					{
						errors["family"] = "Unable to create new family. Please try again";
						return callback(errors)
					}
					delete self.Attributes.Roles
					self.Attributes = self.familyfe.extend(self.Attributes,options)
					self.addMembers(function(err,results){return callback(null, self.Attributes)})
					
				});
					
			}
			else return callback(null, options)
			
		})
	}

	addMembers(callback)
	{
		let self = this
		let familyId = self.Attributes._id;
		let members = self.Attributes.Members
		Async.each(Object.keys(members), function (memberId, next){ 
			let docs = {familyId:familyId,memberId:safeObjectId(memberId), Roles:members[memberId]}
			self.Familyfe.MongoModels.collection = "FamilyMembers"
			self.Familyfe.MongoModels.find({familyId:familyId,memberId:memberId}, function(err, results){
				docs.Roles = self.extendFamilyRoles(docs.Roles, results.Roles || {})
				self.Familyfe.MongoModels.collection = "FamilyMembers"
				self.Familyfe.MongoModels.deleteOne({familyId:familyId,memberId:memberId}, function(err, results){
					self.Familyfe.MongoModels.collection = "FamilyMembers"
					self.Familyfe.MongoModels.insertOne(docs, next);
				});
			})
		}, function(err) {
     	
			callback()
		})
	}

	getMemberId(user, callback)
	{
		let self = this;
		let families = user.Families;
		let personId = user._id;
		let memberIds = {}
		Async.each(families, function (familyId, next){ 
			self.Familyfe.MongoModels.collection = "FamilyMembers"
			self.Familyfe.MongoModels.find({familyId:familyId,memberId:personId}, function(err, results){
				if(err || Objlen(results) < 1)next();
				else
				{					
					for(let i in results)
					{
						let memberId = results[i]._id;
						memberIds[memberId] = familyId;
					}
					next();
				}
			})
		}, function(err) {
     		user.memberIds = memberIds;
			callback(err, user);
		})
	}
}

class abstractFamilyMembers extends abstractWorld
{
	constructor()
	{
		super();
	}
}
class familyMembers extends abstractFamilyMembers
{
	constructor()
	{
		super();
		let self = this;
		// self.Familyfe = new familyfe();
		// self.Familyfe.setCollection("FamilyMembers");
	}
}

/*
 * World
 */
class World extends abstractWorld
{
	constructor(sequelize)
	{
		super();
		let self = this;
		self.sequelize = sequelize;
		self.People = self.Person = new Person(sequelize);
		// self.Families = self.Family = new family;
		// self.FamilyMembers = self.familyMembers = new familyMembers;
	}
	
	/*
	 * What relation has the world to everyother thing??????
	 */
	async parade() {
		let self = this;
		let [err, care, dontcare] = [];
		[err, care] = await to(self.sequelize.models.User.findAll({attributes: self.Person.attributes}))//or user .id
		if(err)return Promise.reject({msg:err.msg||err, code:err.code||422, status:422})
		care = care || {}
		return JSON.parse(JSON.stringify(care))
	}

	async destroyWorld() {
		let self = this;
		self.sequelize.models.User.destroy({
		  where: {},
		  truncate: true
		})

		return true;
	}


	async create(adam, callback)
	{
		let [err, care, dontcare] = [];
		let self = this
		self.destroyWorld().catch((err)=>console.log(err));
		;[err, care] = await to(self.destroyWorld());
		;[err, care] = await to(self.Person.beget(adam))
		if(err)return Promise.reject({msg:err.mg||err.message||err, code:err.code||1000})
		return care;
	}
}

module.exports = (sequelize) => {
	let module = {};
	module.Familyfe =  new familyfe(sequelize)
	module.World =  new World(sequelize)
	module.Person =  new Person(sequelize)
	module.Family =  new Family(sequelize)
		// World: new World(sequelize),
		// Person: new Person(sequelize),
		// Family: new Family(sequelize)
	return module
}