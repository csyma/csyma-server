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
		res.send("SOME API tests")
	}
}

module.exports = Api