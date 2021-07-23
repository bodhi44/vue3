/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
  dev: {
    baseApi: '/',
    mockApi:
      'https://www.fastmock.site/mock/ef69ca1edaea91ba9ae685f3b88c9a25/api'
  },
  test: {
    baseApi: '/test.future.com/api',
    mockApi:
      'https://www.fastmock.site/mock/ef69ca1edaea91ba9ae685f3b88c9a25/api'
  },
  prod: {
    baseApi: '/future.com/api',
    mockApi: ''
  }
}

export default {
  env,
  mock: true,
  ...EnvConfig[env]
}
