//IMPORT
import mongoose from 'mongoose'

let Schema = mongoose.Schema;

let Character = new Schema({
  name: { type: String },
  height: { type: String },
  mass: { type: String },
  hair_color: { type: String },
  skin_color: { type: String },
  eye_color: { type: String },
  birth_year: { type: String },
  gender: { type: String },
})

//EXPORT - Will be the collections name - lowercase/plural
export default mongoose.model("characters", Character)