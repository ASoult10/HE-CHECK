module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
  plugins: [
    function transformImportMetaEnvToProcessEnv({ types: t }) {
      return {
        visitor: {
          MemberExpression(path) {
            const object = path.node.object
            const property = path.node.property
            const isImportMeta =
              object &&
              object.type === 'MetaProperty' &&
              object.meta &&
              object.meta.name === 'import' &&
              object.property &&
              object.property.name === 'meta'
            const isEnvIdentifier =
              property &&
              property.type === 'Identifier' &&
              property.name === 'env' &&
              !path.node.computed

            if (isImportMeta && isEnvIdentifier) {
              path.replaceWith(t.memberExpression(t.identifier('process'), t.identifier('env')))
            }
          }
        }
      }
    }
  ]
}
