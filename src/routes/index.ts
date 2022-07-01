
import Router from '@koa/router'
import glob from 'glob'
import path from 'path'

let routers = []

glob.sync(path.join(__dirname, '!(index.ts)')).forEach(file => {
  console.log(file)
})

const router = new Router()


export {
  router
}

