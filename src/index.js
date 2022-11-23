import express from 'express'
import morgan from 'morgan'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import indexRoutes from './routes/index.js'

const PORT = 3000
// Ruta del directorio
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()


// Uso de 'ejs'
app.set('view engine', 'ejs')
app.set('views', join(__dirname, 'views'))

// Middlewares
app.use(morgan('dev'))
// Para la correcta interpretación de los mensajes en formato JSON
app.use(express.json())

// Uso de archivo de enrutamiento
app.use(indexRoutes)

// Uso de archivos del directorio 'public': CSS...
app.use(express.static(join(__dirname, 'public')))


app.listen(process.env.PORT || PORT, () => console.log(`Server listening on port ${process.env.PORT || PORT}`))

