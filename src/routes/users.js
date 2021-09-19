//External Files
const express = require('express');
const modelApp = require('../models/dbMongo')


//My files
const userFinances = require('../models/dbMongo')
const idFilter = req => member => member.id === parseInt(req.params.id);

//Express Instances
const router = express.Router();

//Middleware Functions
const addNewMember = async (req, res, next) => {

    const resMongo = await modelApp.create(req.body)

    console.log(resMongo)

    res.json({status : 'ok'})

    // const newMember = {
    //     id : req.body.id,
    //     mensalIncome : req.body.mensalIncome,
    //     recurrentExpense : req.body.recurrentExpense,
    // }

    // if (!newMember.id || !newMember.mensalIncome || !newMember.recurrentExpense){
    //     return res.status(400).json({ msg: 'Please fill all fields' })
    // }

    // userFinances.push(newMember)
    // res.json(userFinances)
    // console.log(userFinances)
}

function updateNewMember (req, res, next){
    const doesMemberExist = userFinances.some(user => user.id === parseInt(req.params.id))

    if (doesMemberExist === true){
        userFinances.forEach(user => {
            if (user.id === parseInt(req.params.id)){
                user.mensalIncome = req.body.mensalIncome? req.body.mensalIncome : user.mensalIncome
                user.recurrentExpense = req.body.recurrentExpense? req.body.recurrentExpense : user.recurrentExpense
            }
        })
        res.json(userFinances)
        console.log(userFinances)
    } else {
        res.status(400).json({ msg: 'The user does not exist' })
    }
}


//Request Handler
router.get('/', (req, res) => res.json(userFinances))

router.get('/:id', (req, res) => {
    const doesMemberExist = userFinances.some(user => user.id === parseInt(req.params.id))

    if(doesMemberExist === true) {
        res.json(userFinances.filter(idFilter(req)))  
    }else {
        res.status(400).json({ msg: 'The user does not exist' })
    }
})

router.post('/', addNewMember)

router.put('/:id', updateNewMember)

router.delete('/:id', (req, res) => {
    const doesMemberExist = userFinances.some(user => user.id === parseInt(req.params.id))

    if(doesMemberExist === true) {
        res.json(userFinances.filter(member => !idFilter(req)(member)))  
        console.log(userFinances)
    }else {
        res.status(400).json({ msg: 'The user does not exist' })
    }
})

module.exports = router;