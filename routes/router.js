const router = require('express').Router();

const { crearQueja, obtenerQueja, actualizarQueja, eliminarQueja, getQuejaByCategory } = require('../controllers/quejas');

//Rutas para Quejas
router.post('/quejas', crearQueja);
router.get('/quejas', obtenerQueja);
router.get('/quejas/categoria/:category', getQuejaByCategory);
router.put('/quejas/:id', actualizarQueja);
router.delete('/quejas/:id', eliminarQueja);

module.exports = router;