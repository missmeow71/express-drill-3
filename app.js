const express = require('express')
const cors = require('cors')

const data = [
 {
   "ID": 1,
   "First Name": "Alice",
   "Last Name": "Zephyr",
   "Home Town": "Seattle"
 },
 {
   "ID": 2,
   "First Name": "Bob",
   "Last Name": "Yellow",
   "Home Town": "Vancouver"
 },
 {
   "ID": 3,
   "First Name": "Claire",
   "Last Name": "Xylitol",
   "Home Town": "Toledo"
 },
 {
   "ID": 4,
   "First Name": "Daniel",
   "Last Name": "Winston",
   "Home Town": "Akron"
 },
 {
   "ID": 5,
   "First Name": "Edina",
   "Last Name": "Veritas",
   "Home Town": "Wichita"
 }
]

let port = process.env.PORT || 3000

function findById(data, id) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i]
    }
  }
  return null
}

const app = express()
app.use(cors())

app.get('/', (request, response) => {
  response.json({data})
})

app.get('/:id', (request, response) => {
  var result = findById(data, request.params.id)
  if (!result) {
    response.status(404).json({
      error: {
        message: 'No record found!'
      }
    })
  } else {
    response.json({data: result})
  }
})

app.listen(port)