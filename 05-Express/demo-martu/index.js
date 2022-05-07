var express = require('express');
var app = express();
var logger = require('morgan');//morgan es un middleware muy utilizado.
//importamos el router.
var routes = require('./route.js')
//ahora puedo definir el prefijo de la familia de rutas.
app.use('/about', routes);//notar que esto es un middleware.

/* app.get('/',function(req,res,next){
    //En express no es necesario aclara el Content-Type, express lo identifica de manera automatica.
    //Cuando usamos dos rutas iguales, en la primera podemos hacer algo en la database, hacer algun analisis o lo que sea.
    //y luego pasar la posta al next();
    next();
}); */
//vamos a definir un middleware con el metodo .use(). Podemos usar middleware que ya exixten, o definidos por nosotros.
//Se le puede aclara la ruta sobre la que actue.
app.use('/', (req,res,next)=>{
    //Nota importante: Cualquier request va a ser pasado por este middleware, ya que matchea solo el caracter /.
    //Si tiene barra, adentro. 
    console.log('Hicieron un request a la URL: '+req.url+'. Este es el middleWare')
    next();
})

app.use(logger('dev'));//ESto esta indicando lo siguiente: Ante cada request invoca al logger con la especificacion de dev. 
//El dev es un logger nos muestra en pantalla que esta pasando en el servidor. Que respuestas llegaron, que respuestas se dio, etc.
//Adentro de logger ya esta definido el next(), y todos los analisis que queremos hacer al servidor.    n


app.use(express.json());//Esto parsea de manera automatica la informacion. 


//Si queremos hacer un post, publicar algo adentro de la base de datos, lo redactamos como sigue.
app.post('/',function(req,res){
    console.log(req.body);
    res.send('done')
})

app.put('/:id',(req,res)=>{
    res.send(req.params.id);
})



app.get('/',function(req,res,next){
    //En express no es necesario aclara el Content-Type, express lo identifica de manera automatica.
    res.send(`<h1>Hello world, this is a Header</h1>
    <hr/>
    <button onClick = 'onClick()' >Click me, motherfucker</button>`);
});
app.get('/home',function(req,res,next){
    res.send('Esta es la home de express.')
})
//El signo de pregunta indica que el elemento anterior al signo puede o no pertenecer a la ruta.
//Entonces abcd te devuelve la misma vista que acd
app.get('/ab?cd',function(req,res,next){
    res.send('ab?cd');
});
//El signo * indica que el caracter anterior se puede repetir indefinidamente, devolviendo siempre la misma ruta.
//entonces '/abcd' es equivalente a '/abbbbbbbbbbcd'
app.get('/ab*cd',function(req,res,next){
    res.send('ab*cd');
});

//Cuando vimos el routeo en React vimos una forma de pasar informacion por URL.
//lo haciamos /ciudad/:id;
app.get('/welcome/:name',(req,res)=>{
    console.log(req.params);
    //podemos acceder a los params de dos formas:
    //let name = req.params.name;
    let {name} = req.params;//cuando tenemos varios params, por ejemplo /:name/:lastname, tenemos que hacer destructuring, {name, lastname} = req.params.
    res.send(`<h1>Bienvenido, ${name}. Usted esta pasando la información de los params de la URL a la vista.</h1>`)
    //Este envio de params por URL se puede utilizar cuando queremos ir a buscar informacion a la base de datos.
})
app.get('/name', (req,res)=>{
    //En el caso en que ester trabajando por Query, no lo tengo que aclara en la definicion de la ruta como haciamos en los params. 
    //Aca simplemente lo obtenemos sin definirlo en el route.
    let {name, lastname, age} = req.query;
    if(name && lastname && age){
        res.send(`<h1>Your name is ${name}, and your lastname is ${lastname} and your age is ${age}</h1>`);
    }
    
});







app.listen(1337);//Levanta el servidor.