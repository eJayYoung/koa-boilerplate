
import Router from '@koa/router'
import glob from 'glob'
import path from 'path'

const router = new Router()

Promise.all(
  glob.sync(path.join(__dirname, '!(index.ts)')).map(file => import(file))
).then(modules => {
  modules.forEach(({ default: route }) => {
    router.use(route.routes())
  })
})

export {
  router
}

