export class Resource {
  constructor(options) {
    this.name = options.name
    this.baseUrl = options.baseUrl
    this.headers = options.headers
  }

  async getHeaders(params) {
    if (this.headers instanceof Function) {
      return this.headers(params)
    }

    return this.headers || {}
  }
}
