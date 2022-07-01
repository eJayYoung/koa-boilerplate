import Router from '@koa/router'
import { list } from '../controllers/customer'

const router = new Router({
  prefix: '/customer'
})

router.get('/list', list)

export default router