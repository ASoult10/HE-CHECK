targetScope = 'resourceGroup'

@description('Ubicación de los recursos. Por defecto usa la del Resource Group.')
param location string = resourceGroup().location

@description('Nombre de la Static Web App')
param staticWebAppName string = 'he-check-app'

@description('Nombre de la Function App')
param functionAppName string = 'he-check-function'

@description('SKU de la Static Web App')
@allowed([
	'Free'
	'Standard'
])
param staticWebAppSkuName string = 'Free'

@description('SKU del plan de la Function App (Y1 = Consumption)')
param functionSkuName string = 'Y1'

module staticWebApp './staticWebApp.bicep' = {
	name: 'staticWebApp'
	params: {
		name: staticWebAppName
		location: location
		skuName: staticWebAppSkuName
	}
}

module azureFunctions './azureFunctions.bicep' = {
	name: 'azureFunctions'
	params: {
		name: functionAppName
		location: location
		skuName: functionSkuName
	}
}

output staticWebAppEndpoint string = staticWebApp.outputs.staticWebAppEndpoint
output functionAppEndpoint string = azureFunctions.outputs.functionAppEndpoint
