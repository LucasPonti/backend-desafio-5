const express = require('express');
const handlebars = require('express-handlebars');



const app = express();

const productos = [];

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//--------------------PLANTILLAS---------------------------
//---------------------- EJS ------------------------------
//DESCOMENTAR ESTA OPCION Y COMENTAR LAS OTRAS DOS PARA USAR
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('inicio', {productos});
});

app.get('/productos', (req, res) => {
    res.render('historial', {productos});
})

app.post('/productos', (req, res) => {
    productos.push(req.body);
    res.redirect('/');
});

app.listen(8080);

//---------------------- PUG ------------------------------
//DESCOMENTAR ESTA OPCION Y COMENTAR LAS OTRAS DOS PARA USAR
// app.set('views', './views');
// app.set('view engine', 'pug');

// app.get('/', (req, res) => {
//     res.render('formulario', {productos});
// });

// app.get('/productos', (req, res) => {
//     res.render('historial', {productos});
// })

// app.post('/productos', (req, res) => {
//     productos.push(req.body);
//     res.redirect('/');
// });

// app.listen(8080);

//---------------------- HBS ------------------------------
//DESCOMENTAR ESTA OPCION Y COMENTAR LAS OTRAS DOS PARA USAR

// app.engine(
//     'hbs', 
//     handlebars({
//         extname: '.hbs',
//         defaultLayout: 'inicio.hbs',
//         layoutsDir: __dirname + '/views',
//         partialsDir: __dirname + '/views'
//     })
// );

// app.set('views', './views');
// app.set('view engine', 'hbs');

// app.get('/', (req, res) => {
//     res.render('inicio.hbs',  {listExists: true, productos});
// });

// app.get('/productos', (req, res) => {
//     res.render('./historial.hbs', {listExists: true, productos});
// })

// app.post('/productos', (req, res) => {
//     productos.push(req.body);
//     res.redirect('/');
// });

// app.listen(8080);

//----------------------------------------------------------
