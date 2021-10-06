//config inicial

//importando o express
const express = require('express')
const mongoose = require('mongoose')
//Aqui inicializamos o express
const app = express()


//forma de ler JSON//middleware
app.use(
    express.urlencoded({
        extended: true
    }),
)

app.use(express.json())

//rotas da API

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

//ROta inicial / endpoint
app.get('/', (req,res) => {

    //mostrar req
    res.json({message: "Oi Express!!! Estou Funcionando!!!"})

}) 

//entregar uma porta

const DB_USER = 'walissons12'
const DB_PASSWORD =  encodeURIComponent ('Wal05001')

mongoose
    .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.fw0kl.mongodb.net/bancodaapi?retryWrites=true&w=majority`
    )

    .then(() => {
        console.log("Conectamos ao Mongo DB!!!")
        app.listen(3000)
        
    }).catch((err) => console.log(err))
