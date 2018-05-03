'use strict'
const csystem = require(__dirname+"/../csystem").csystem;

class Api extends csystem
{

	constructor()
	{
		super()
	}

	main(req, res)
	{
		res.send("You are in the api. Please see the documentation on how to use.")
	}
}

module.exports = Api