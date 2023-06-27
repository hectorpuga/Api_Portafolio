const {Router} =require('express');

const {emailPost} = require('../controllers/usuarios');
const { validarCampos } = require('../middlewares/validar-campos');

const router= Router();


router.post('/email',emailPost);

module.exports=router;
