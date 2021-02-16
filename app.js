require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT;

// Servir contenido estatico
app.use( express.static('public'));

app.get('/',  (req, res) => {
  res.render('home',{
    nombre: 'Marlon',
    titulo: 'Curso de Node'
  });
});

// Servimos
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
  });
   
app.listen(port, ()=>{
    console.clear();
    console.log(('Esta corriendo en el puerto: %s'), port);
})