const {connect, Schema, model} = require('mongoose')

const mongodB = 'mongodb+srv://admin:test@cluster0.rvdmx.mongodb.net/dbTest?retryWrites=true&w=majority'


const connectToDataBase = async () => {
    await connect(mongodB)
}

const login = new Schema({
    name : {type: String, required: true},
    email : {type: String, required: true},
    password : {type: Number, required: false, default: 100},
})

const modelApp = model('loginApp', login)

module.exports = modelApp

// const main = async () => {

// }

// try {
//     connectToDataBase()
// } catch (error) {
//     console.log(error)
// }


// //Database mock
// let userFinances = [
//     { 
//         id: 1, 
//         mensalIncome : 9000, 
//         recurrentExpense : 500 
//     },
//     { 
//         id: 2, 
//         mensalIncome : 5000, 
//         recurrentExpense : 100 
//     },
//     { 
//         id: 3, 
//         mensalIncome : 2000, 
//         recurrentExpense : 300 
//     },
// ]

// module.exports = userFinances