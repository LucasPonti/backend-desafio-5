const express = require('express');
const handlebars = require('express-handlebars');
const Contenedor = require('./api/productos')


const app = express();

const prod = new Contenedor();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//--------------------PLANTILLAS---------------------------
//---------------------- EJS ------------------------------
//DESCOMENTAR ESTA OPCION Y COMENTAR LAS OTRAS DOS PARA USAR
// app.set('views', './views');
// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     const productos = prod.getAll();
//     res.render('inicio', {productos});
// });

// app.get('/productos', (req, res) => {
//     const productos = prod.getAll();
//     res.render('historial', {productos});
// })

// app.post('/productos', (req, res) => {
//     prod.save(req.body);
//     res.redirect('/');
// });

// app.listen(8080);

//---------------------- PUG ------------------------------
//DESCOMENTAR ESTA OPCION Y COMENTAR LAS OTRAS DOS PARA USAR
// app.set('views', './views');
// app.set('view engine', 'pug');

// app.get('/', (req, res) => {
//     const productos = prod.getAll();
//     res.render('formulario', {productos});
// });

// app.get('/productos', (req, res) => {
//     const productos = prod.getAll();
//     res.render('historial', {productos});
// })

// app.post('/productos', (req, res) => {
//     prod.save(req.body);
//     res.redirect('/');
// });

// app.listen(8080);

//---------------------- HBS ------------------------------
//DESCOMENTAR ESTA OPCION Y COMENTAR LAS OTRAS DOS PARA USAR

app.engine(
    'hbs', 
    handlebars({
        extname: '.hbs',
        defaultLayout: 'inicio.hbs',
        layoutsDir: __dirname + '/views',
        partialsDir: __dirname + '/views'
    })
);

app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    const productos = prod.getAll();
    res.render('inicio',  {listExists: true, productos});
});

app.get('/productos', (req, res) => {
    const productos = prod.getAll();
    res.render('./historial', {listExists: true, productos});
})

app.post('/productos', (req, res) => {
    prod.save(req.body);
    res.redirect('/');
});

app.listen(8080);

//----------------------------------------------------------
