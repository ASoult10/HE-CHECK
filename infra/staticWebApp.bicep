@description('Nombre de la Static Web App')
param name string

@description('Ubicación de la Static Web App')
param location string = resourceGroup().location

@description('SKU de la Static Web App')
param skuName string

resource staticWebApp 'Microsoft.Web/staticSites@2022-09-01' = {
  name: name
  location: location
  sku: {
    name: skuName
    tier: skuName
  }
  properties: {}
}

output staticWebAppEndpoint string = staticWebApp.properties.defaultHostname
