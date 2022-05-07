var express = require('express');
var router = express.Router();

//A partir de esto podemos importar cualquier cantidad de rutas.

router.get('/',(req,res)=>{
    res.send('Hola estoy en...');
});

router.get('/pablo',(req,res)=>{
    res.send('Pablo');
});
router.get('/:id',(req,res)=>{

    res.send(req.params.id);
})
//Con esto podemos definir el prefijo de un grupo de rutas.
module.exports = router;