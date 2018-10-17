# familyfe-challenge


# Routes



# vipimo
## GatewayTypes

CreateNew

`
	POST http://localhost:8799/api/vipimo/gatewaytype
		{
			"type":"Lorank",
			"channels":"Multi"
		}
`

Edit

`
	PATCH http://localhost:8799/api/vipimo/gatewaytype/Lorank
		{
			"type": "Lorank",
			"channels":"single"
		}
`

List

`
	GET http://localhost:8799/api/vipimo/gatewaytype/
	GET http://localhost:8799/api/vipimo/gatewaytype/Lorank
	GET http://localhost:8799/api/vipimo/gatewaytype/1{id or type}
	}
`



## Gateways

CreateNew

`
	POST http://localhost:8799/api/vipimo/gateway
			{
				"mac":"30aea4fffe2d6048",
				"GatewayTypeId":1,
				"addr":"10000000", 
				"location":"Office"
			}	
`

Update GatewayTime

`	POST http://localhost:8799/api/vipimo/gateway/30aea4fffe2d6048
			{
			}
`

SingleGateway
`
	GET http://localhost:8799/api/vipimo/gateway/30aea4fffe590e04
`

All Gateways
`
	GET http://localhost:8799/api/vipimo/gateway/
`

PATCH

`
	PATCH http://localhost:8799/api/vipimo/gateway/30aea4fffe2d6048
			{
				"mac":"30aea4fffe2d6048",
				"GatewayTypeId":1,
				"addr":"10000000", 
				"location":"Office"
			}	
`