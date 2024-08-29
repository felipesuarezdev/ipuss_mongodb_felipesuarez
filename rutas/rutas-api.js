const express = require('express');
const router = express.Router();
const Person = require('../modelo/person');

// Obtener todas las personas
router.get('/', async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener una persona específica por ID
router.get('/:id', async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (person == null) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }
    res.json(person);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear una nueva persona
router.post('/', async (req, res) => {
  const person = new Person({
    name: req.body.name,
    lastName: req.body.lastName,
    works: req.body.works,
    nationality: req.body.nationality,
    year: req.body.year
  });

  try {
    const newPerson = await person.save();
    res.status(201).json(newPerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Actualizar una persona existente
router.put('/:id', async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (person == null) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }

    person.name = req.body.name || person.name;
    person.lastName = req.body.lastName || person.lastName;
    person.works = req.body.works || person.works;
    person.nationality = req.body.nationality || person.nationality;
    person.year = req.body.year || person.year;

    const updatedPerson = await person.save();
    res.json(updatedPerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar una persona
router.delete('/:id', async (req, res) => {
  try {
    const person = await Person.findByIdAndDelete(req.params.id);
    if (person == null) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }
    res.json({ message: 'Persona eliminada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener todos los trabajos de una persona
router.get('/:id/works', async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (person == null) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }
    res.json(person.works);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Agregar un nuevo trabajo de una persona
router.post('/:id/works', async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (person == null) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }

    person.works.push(req.body);
    await person.save();
    res.status(201).json(person.works);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Actualizar un trabajo específico
router.put('/:id/works/:workId', async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (person == null) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }

    const work = person.works.id(req.params.workId);
    if (work == null) {
      return res.status(404).json({ message: 'Trabajo no encontrado' });
    }

    work.company = req.body.company || work.company;
    work.initContract = req.body.initContract || work.initContract;
    work.finishContract = req.body.finishContract || work.finishContract;
    work.position = req.body.position || work.position;

    await person.save();
    res.json(work);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar un trabajo específico
router.delete('/:id/works/:workId', async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (person == null) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }

    const work = person.works.id(req.params.workId);
    if (work == null) {
      return res.status(404).json({ message: 'Trabajo no encontrado' });
    }

    await person.save();
    res.json({ message: 'Trabajo eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
