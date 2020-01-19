const express = require('express');     //importando a lib do express para uma variavel
const mongoose = require('mongoose');   //importar mongoose para conexão com bd
const cors = require('cors');           //importar cors para permitir acesso a API via outros endereços
const routes = require('./routes');     //importar arquivo routes

const app = express();                  //criando aplicação

mongoose.connect('mongodb+srv://omnistack:admin@cluster0-ferpu.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());                //cadastrar em todos os métodos HTTPs o formato JSON : use = universal
app.use(routes);                        //cadastrar as rotas do aquivo routes no app

//rota do get
/*app.get('/', (request, response) => {
    return response.send('Hello world');
});
*/
/* 
app.get('/', (req, res) =>{
    console.log(req.query);
    return res.json({ message: 'Hello Omnistack!' });
});
*/
/*
app.delete('/users/:id', (req, res) =>{
    console.log(req.params);
    return res.json({ message: 'Hello Omnistack!' });
});
*/
/*
app.post('/users/:id', (req, res) =>{
    console.log(req.body);
    return res.json({ message: 'Hello Omnistack!' });
});
*/

app.listen(3333); // definindo a porta 3333 do localhost para nosso app