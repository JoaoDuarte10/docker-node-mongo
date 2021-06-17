const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.use(express.json());

router.get('/', userController.buscar);
router.post('/add', userController.salvar);
router.put('/edit', userController.atualizar);
router.delete('/delete', userController.deletar);

module.exports = router;