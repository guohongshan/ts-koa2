import Koa from 'koa'; // 导入koa
import Router from "koa-router"; // 导入koa-router
import KoaLogger from "koa-logger"; // 导入日志

// 实例化
const app = new Koa(); // 新建一个koa对象
const router = new Router(); // 新建一个koa-router
const logger = KoaLogger()

router.get('/', async (ctx) => { // 截获所有路由，都指向此函数
    const list: number = 123
    const b: string = list.toString()
    console.log(b)
    ctx.body = 'Hello koa' // 像浏览器返回数据
})

app.use(logger) // 日志输出

app.use(router.routes()); // 使用路由

// 监听8080端口
app.listen(8080, () => {
    console.log('server running on http://localhost:8080')
});