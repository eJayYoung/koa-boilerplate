import Router from '@koa/router'
import { list } from '../controllers/customer'

const router = new Router({
  prefix: '/contract'
})

router.get('/list', list)

export default router