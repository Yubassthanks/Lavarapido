const express = require('express');

const router = express.Router();

const agendamento = require('../controller/agendamento');
const automovel = require('../controller/automovel');
const servico = require('../controller/servico');
const cliente = require('../controller/cliente');
const mensagem = require ('../controller/mensagem');

router.get('/', (req, res) => { return res.json("Api Lava Respondendo")});

router.post('/cliente/criar', cliente.create);
router.get('/cliente', cliente.read);
router.get('/cliente/:id', cliente.read);
router.put('/cliente/:id', cliente.update);
router.delete('/cliente/:id', cliente.del);
router.post('/cliente/login', cliente.login)


router.post('/automovel/criar', automovel.create);
router.get('/automovel', automovel.read);
router.get('/automovel/:id', automovel.read);
router.get('/automovel/cliente/:id', automovel.getByClienteId)
router.put('/automovel/:id', automovel.update);
router.delete('/automovel/:id', automovel.del)


router.post('/servico', servico.create);
router.get('/servico', servico.read);
router.get('/servico/:id', servico.read);
router.put('/servico/:id', servico.update);
router.delete('/servico/:id', servico.del);


router.post('/agendamento', agendamento.create);
router.get('/agendamento', agendamento.read);
router.get('/agendamento/:id', agendamento.read);
router.put('/agendamento/:id', agendamento.update);
router.delete('/agendamento/:id', agendamento.del);

router.post('/mensagem', mensagem.create);
router.get('/agendamento', agendamento.read);
module.exports = router;
