const axios = require('axios');


async function readDollarAPI (){

  try {
    let res = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
    console.log(res.data.USDBRL)
  } catch (error) {
    console.log(`Could not read the dollar API: ${error}`)
  }

}

async function postJSON (){
  try {
    let res = await axios.post('http://localhost:8000/users', { 
      name : 'user', 
      email : 'mogol@gmail.com', 
      password : 13312 
    })

    console.log(res)

  } catch (error) {
    console.log(`Could not read the dollar API: ${error}`)
  }
}

async function getJSON (){
  try {
    let res = await axios.get('http://localhost:8000/users/2')

    console.log(res.data)

  } catch (error) {
    console.log(`Could not read the dollar API: ${error}`)
  }

}

async function putJSON (){
  try {
    let res = await axios.put('http://localhost:8000/users/4', { 
      mensalIncome : 845, 
      recurrentExpense : 443 
    })

    console.log(res)

  } catch (error) {
    console.log(`Could not read the dollar API: ${error}`)

  }
}

async function deleteJSON (){
  try {
    let res = await axios.delete('http://localhost:8000/users/1')

    console.log(res)

  } catch (error) {
    console.log(`Could not read the dollar API: ${error}`)

  }
}

//deleteJSON()
// putJSON()
// getJSON()
postJSON()
//readDollarAPI()
