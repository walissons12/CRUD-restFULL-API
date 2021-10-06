const router = require('express').Router()

const { application } = require('express')
const Person = require ('../models/person')

//CREATE
router.post('/', async (req,res) =>{

    //req.body
    const {name,salary,approved} = req.body

    if(!name){
        res.status(422).json({error: 'O nome é obrigatorio'})
        return
    }

    const person = {
        name,
        salary,
        approved
    }

    //create

    try {
        await Person.create(person)

        res.status(201).json({message: 'Pessoa inserida no sistema com sucesso!'})

    } catch (error) {
        res.status(500).json({error: error})
    }

})

//READ

router.get('/', async (req, res) => {
    try {
        const people = await Person.find()

        res.status(200).json(people)

    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/:id', async (req,res) => {
    //estrair o dado da requisicao = pela url = req.params
    const id = req.params.id

    try {
        const person = await Person.findOne({_id: id})

        if(!person){
            res.status(424).json({message: "O usuario nao foi encontrado!"})
            return
        }

        res.status(200).json(person )

    } catch (error) {
        res.status(500).json({error: error})
    }

})


//UPDATE (PUT, PATCH)
router.patch()


module.exports = router