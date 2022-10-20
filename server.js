//IMPORT
import db from './db/connection.js'
import parser from 'body-parser'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import chalk from 'chalk'
import routes from './routes/index.js'

const app = express()
const PORT = 3000;

//USE BODY PARSER
app.use(express.json())
app.use(cors())
app.use(logger("dev"))

app.use('/', routes);
//APP LISTEN
//app.listen(3000, () => {
//console.log('app listening on port 3000')
//})

//ROUTES
app.get('/', (req, res) => {
  ListCollectionsCursor.find({}).then()
})

//CLEARS TERMINAL + CONNECTS DB
db.on('connected', () => {
  console.clear()
  console.log(chalk.blue('connected to MongoDB'));
  app.listen(PORT, () => {
    console.log(`Express server running in development on Port ${ PORT }`);
  });
});