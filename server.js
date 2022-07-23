const express = require ('express');

const router = require('./network/routes')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//app.use(router)

router(app)




app.use('/app', express.static('public'))
app.listen(3000);
console.log('La aplicación está funcionando en http://localhost:3000');


//QUEDÉ POR EL VIDEO 4 DE LA CARPETA 3