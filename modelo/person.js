const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define el esquema para el objeto Work
// Definir el schema de la base de datos es importante, básicamente
// le estamos diciendo como se construirá la Persona y el objeto Work
// que se encuentra dentro de la Persona y tiene sus propios campos.

const workSchema = new Schema({
    company: { type: String, required: true },
    initContract: { type: Date, required: true },
    finishContract: { type: Date },
    position: { type: String, required: true }
});

// Define el esquema para el modelo Person
//lo definimos después para mantener el orden, ya que necesitamos
// el esquema de work primero.
const personSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    works: [workSchema],//la constante que creamos arriba
    nationality: { type: String, required: true },
    year: { type: Number, required: true }
});

// Crea el modelo Person a partir del esquema
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
