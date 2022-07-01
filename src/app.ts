import Koa from 'koa'
import { router } from './routes'
import { port } from './config'

const app = new Koa()

app.use(router.routes())
  .use(router.allowedMethods())


app.listen(port, () => {
  console.log(`start server in localhost:${port}`)
})