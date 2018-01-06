import Koa from 'koa'
import KoaStatic from 'koa-static'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

import {database} from './mongodb' // 引入mongodb
import {saveInfo, fetchInfo} from './controlers/info' // 引入info controller
import {saveStudent, fetchStudent, fetchStudentDetail} from './controlers/student' // 引入 student controller

database()

const app = new Koa()
const router = new Router()

app.use(bodyParser())
app.use(KoaStatic(__dirname+ '/public'))

router.get('/test', (ctx, next) => {
  ctx.body = 'test page'
})

// 设置每一个路由对应的相对的控制器
router.post('/saveinfo', saveInfo)
router.get('/info', fetchInfo)

router.post('/savestudent', saveStudent)
router.get('/student', fetchStudent)
router.get('/studentDetail', fetchStudentDetail)


app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(4030)

console.log('graphQL server at http://127.0.0.1:' + 4030)
