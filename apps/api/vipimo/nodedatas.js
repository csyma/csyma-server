'use strict'
const to = require('await-to-js').to,
passport = require('passport'),
csystem = require(__dirname+"/../../csystem").csystem,
{sequelize} = require(__dirname+"/../../csystem").models,
Familyfe = require(__dirname+'/../../../modules/node-familyfe')(sequelize)

class nodeData extends csystem {

	constructor() {
		super()
	}

	async insertintoDigital1(data) {
		let insert = {
			Data:data
		}
		let [err, care] = await to(sequelize.models.Digital1.create(insert))
		if(err) throw err;
		return care.dataValues.Digital1Id;
	}
	async insertintoDigital2(data) {
		let insert = {
			Data:data
		}
		let [err, care] = await to(sequelize.models.Digital2.create(insert))
		if(err) throw err;
		return care.dataValues.Digital2Id;
	}
	async insertintoDigital3(data) {
		let insert = {
			Data:data
		}
		let [err, care] = await to(sequelize.models.Digital3.create(insert))
		if(err) throw err;
		return care.dataValues.Digital3Id;
	}
	async insertintoDigital4(data) {
		let insert = {
			Data:data
		}
		let [err, care] = await to(sequelize.models.Digital4.create(insert))
		if(err) throw err;
		return care.dataValues.Digital4Id;
	}

	async insertintoAnalog1(data) {
		let insert = {
			Data:data
		}
		let [err, care] = await to(sequelize.models.Analog1.create(insert))
		if(err) throw err;
		return care.dataValues.Analog1Id;
	}
	async insertintoAnalog2(data) {
		let insert = {
			Data:data
		}
		let [err, care] = await to(sequelize.models.Analog2.create(insert))
		if(err) throw err;
		return care.dataValues.Analog2Id;
	}
	async insertintoAnalog3(data) {
		let insert = {
			Data:data
		}
		let [err, care] = await to(sequelize.models.Analog3.create(insert))
		if(err) throw err;
		return care.dataValues.Analog3Id;
	}
	async insertintoAnalog4(data) {
		let insert = {
			Data:data
		}
		let [err, care] = await to(sequelize.models.Analog4.create(insert))
		if(err) throw err;
		return care.dataValues.Analog4Id;
	}

	async insertintoTemperature1(data) {
		let insert = {
			Data:data
		}
		let [err, care] = await to(sequelize.models.Temperature1.create(insert))
		if(err) throw err;
		return care.dataValues.Temperature1Id;
	}
	async insertintoTemperature2(data) {
		let insert = {
			Data:data
		}
		let [err, care] = await to(sequelize.models.Temperature2.create(insert))
		if(err) throw err;
		return care.dataValues.Temperature2Id;
	}
	async insertintoTemperature3(data) {
		let insert = {
			Data:data
		}
		let [err, care] = await to(sequelize.models.Temperature3.create(insert))
		if(err) throw err;
		return care.dataValues.Temperature3Id;
	}
	async insertintoTemperature4(data) {
		let insert = {
			Data:data
		}
		let [err, care] = await to(sequelize.models.Temperature4.create(insert))
		if(err) throw err;
		return care.dataValues.Temperature4Id;
	}
	async insertintoBattery(data) {
		let insert = {
			Data:data
		}
		let [err, care] = await to(sequelize.models.Battery.create(insert))
		if(err) throw err;
		return care.dataValues.Battery4Id;
	}


	async createNodeDataEntry(req, res) {
		let self = this
		let NodeAddr = req.params.v2
		let body = req.body;
		let mac = body.mac;
		let Data = body.data;
		let rssi = body.rssi;
		let snr = body.snr;
		let frequency = body.frequency;
		let bandwidth = body.bandwidth;
		let spreadingFactor = body.sf;
		let FrameCount = body.FrameCounter;


		let [err, care] = [];

		;[err, care] = await to(sequelize.models.Gateway.findOne({where:{MAC:mac}}))
		if (err)
			throw err;
		if (care.dataValues.length === 0)
			throw 'unrecognised gateway'
		let GatewayGatewayId = care.dataValues.GatewayId;

		;[err, care] = await to(sequelize.models.Node.findOne({where:{NodeAddr:NodeAddr}}))
		if (err)
			throw err;
		if (care.dataValues.length === 0)
			throw 'unrecognised node'
		let NodeNodeId = care.dataValues.NodeId;

		let insert = {
			RSSI:rssi,
			SNR: snr,
			frequency: frequency,
			bandwidth:bandwidth,
			spreadingFactor: spreadingFactor
		}
		;[err, care] = await to(sequelize.models.NodeSignal.create(insert))
		if(err)
			throw err;

		let NodeSignalId = care.dataValues.NodeSignalId;

		insert = {
			NodeNodeId,
			GatewayGatewayId,
			NodeSignalNodeSignalId: NodeSignalId,
			FrameCount
		}

		for(let item in body) {
			switch(item) {
				case 'D1':
					 [err, care] = await to(self.insertintoDigital1(body.D1))
					if(care) insert.Digital1Digital1Id = care
					break;
				case 'D2':
					 [err, care] = await to(self.insertintoDigital2(body.D2))
					if(care) insert.Digital2Digital2Id = care
					break;
				case 'D3':
					 [err, care] = await to(self.insertintoDigital3(body.D3))
					if(care) insert.Digital3Digital3Id = care
					break;
				case 'D4':
					 [err, care] = await to(self.insertintoDigital4(body.D4))
					if(care) insert.Digital4Digital4Id = care
					break;
				case 'T1':
					 [err, care] = await to(self.insertintoTemperature1(body.T1))
					if(care) insert.Temperature1Temperature1Id = care
					break;
				case 'T2':
					 [err, care] = await to(self.insertintoTemperature2(body.T2))
					if(care) insert.Temperature2Temperature2Id = care
					break;
				case 'T3':
					 [err, care] = await to(self.insertintoTemperature3(body.T3))
					if(care) insert.Temperature3Temperature3Id = care
					break;
				case 'T4':
					 [err, care] = await to(self.insertintoTemperature4(body.T4))
					if(care) insert.Temperature4Temperature4Id = care
					break;
				case 'A1':
					 [err, care] = await to(self.insertintoAnalog1(body.A1))
					if(care) insert.Analog1Analog1Id = care
					break;
				case 'A2':
					 [err, care] = await to(self.insertintoAnalog2(body.A2))
					if(care) insert.Analog2Analog2Id = care
					break;
				case 'A3':
					 [err, care] = await to(self.insertintoAnalog3(body.A3))
					if(care) insert.Analog3Analog3Id = care
					break;
				case 'A4':
					 [err, care] = await to(self.insertintoAnalog4(body.A4))
					if(care) insert.Analog4Analog4Id = care
					break;
				case 'B':
					 [err, care] = await to(self.insertintoBattery(body.B))
					if(care) insert.BatteryBatteryId = care
					break;



			}
		}

		console.log('for noew datas....')
		console.log(insert)
		console.log(body)
		;[err, care] = await to(sequelize.models.NodeData.create(insert))

		if(care === null) return res.json({})
		// let {NodeEncodingId, Encoding} = care.dataValues 
		// res.json({NodeEncodingId, Encoding})
		res.json({})
		return;
	}

	async main(req, res) {
		console.log('inside MAIN...')
		let self = this;
		let method = req.method;
		// res.send('starting working on nodes...')
		console.log('starting nodeData work')

		switch(method) {
			case 'POST':
				await self.createNodeDataEntry(req, res);
				break;
			// case 'GET':
			// 	await self.datatoNode(req, res);
			// 	break;
			default:
				res.send('still building this sections');
		}
	}

}

module.exports = new nodeData();