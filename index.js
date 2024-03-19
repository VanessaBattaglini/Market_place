const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const PORT = 3005;

//Motor de pantilla
app.set('view engine', 'hbs')
app.engine('hbs', exphbs.engine({
    extname: 'hbs'
}));
app.set('views', __dirname + '/views');

//Rutas staticas
app.use(express.static('assets'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));

//Rutas
app.get('/', (req, res) => {
    res.render('home', {
        products:['banana', 'cebollas', 'pimenton', 'papas', 'lechuga', 'tomate']
    })
});





app.listen(PORT, () => console.log(`El servidor se ha levantado en el port http://localhost:${PORT}`))