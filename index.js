//console.log('hello world node!');
//const a = 1;
//const b = 2;
//console.log(a + b);

// config initial
const express = require('express') // importanto express
const app = express()  //inicializando express
const port = 3000 //definindo a porta

// ler JSON / utilizando midleware
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

//rota inicial
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})

// configurar uma porta
app.listen(3000)