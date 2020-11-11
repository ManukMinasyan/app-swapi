import * as api from './core/provider'

const plugin = function(app, options) {
  api.setDefaultResource(options.default)

  options.resources.forEach(resource => {
    api.createResource(resource)
  })

  app.config.globalProperties.$api = api.useApi()
}

export default plugin
export * from './core/provider'
