import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import "dotenv/config"
import { errorHandler } from "./middlewares/errorHandler.js"
import xss from "xss-clean"
import schoolRoutes from "./routes/schoolRoutes.js"
import helmet from "helmet"

const app = express()
const port =  process.env.PORT || 2020


      //middleware initialization

      app.use(bodyParser.urlencoded())
      // app.use(xss())
      app.use(helmet())

      app.use(cors({origin: "*"}))
      app.use(express.json())
      

     
      //route initialization
      app.use("/", schoolRoutes)


      //error handler initialization
      app.use(errorHandler)


      app.listen(port, console.log(`Server listening on port: ${port}`))



