const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router');
const router = new Router()
const multer = require('@koa/multer')
const path = require('path')
const server = require('http').createServer(app.callback())
const io = require('socket.io')(server)
const cors = require('@koa/cors')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname ,'../saveImage'))
    },
    filename: function (req, file, cb) {
        let type = file.originalname.split('.')[1]
        cb(null, `${file.fieldname}-${Date.now().toString(16)}.${type}`)
    }
})
const upload = multer({storage})

app.use(cors());

//单文件上传
router.post('/upload', upload.single('file'), async (ctx,next)=>{
    console.log(1)
    ctx.body = {
        code: 1,
        data: ctx.file
    }
})

//多图上传
router.post('/uploadMul', upload.array('files'), async (ctx,next)=>{
    console.log(2)
    ctx.body = {
        code: 1,
        data: ctx.file
    }
})


io.on('connection', (socket) => {
    socket.on('ferret', (name, fn) => {
        console.log(name)
        fn('woot');
    });
})



app.use(router.routes());
//允许使用路由中间件
app.use(router.allowedMethods());





server.listen(9999, () => {
    console.log('listening on *:9999');
})