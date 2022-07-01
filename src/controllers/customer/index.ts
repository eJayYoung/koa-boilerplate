import { RouterContext } from "@koa/router"

export const list = (ctx: RouterContext) => {
  ctx.body = {
    data: [
      {
        name: '张三',
        id: 1,
      },
      {
        name: '李四',
        id: 2,
      },
      {
        name: '王二麻子',
        id: 3,
      },
    ]
  }
}