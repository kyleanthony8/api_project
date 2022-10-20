//IMPORT
import db from '../db/connection.js'
import Character from '../models/Character.js'
import characters from './characters.json' assert { type: 'json' };

const insertData = async () => {
  //reset database
  await db.dropDatabase();

  //insert data
  await Character.create(characters);

  db.close();
};

insertData();