const { checkDB, syncModels } = require('./db/index.js')
const express = require('express')
const cors = require('cors')
const morgan = require("morgan");
const addRelationsToModels = require('./db/relations.js')

const router = require('./api/routes/index.js')

async function dbConnect() {
  try {
    await checkDB()
    addRelationsToModels()
    await syncModels()
  } catch (error) {
    console.log(error)
  }
}

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(morgan("dev"));

app.listen(port, async () => {
  await dbConnect()
  console.log(`--> Servidor arrancado en puerto ${port}`)
})

app.use('/api', router)