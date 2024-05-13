import express from 'express'; /*para usar esto en package.json: "type":"module",*/
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'




const app = express()

app.use(express.json())


app.use('/', indexRoutes)
app.use('/api',employeesRoutes)

app.use((req, res, next)=>{
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app