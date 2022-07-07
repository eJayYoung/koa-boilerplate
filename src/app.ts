import Koa from 'koa'
import koaBody from 'koa-body'
import { router } from './routes'
import { port } from './configs'

const app = new Koa()

// add koa-body for body parsing
app.use(koaBody())

// add routes, and support respond with "Method Not Allowed - 405"
app.use(router.routes())
  .use(router.allowedMethods())


app.listen(port, () => {
  console.log(`start server in http://localhost:${port}`)
})