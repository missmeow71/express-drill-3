const express = require('express')
const cors = require('cors')

const data = [
 {
   "ID": 1,
   "firstName": "Alice",
   "lastName": "Zephyr",
   "homeTown": "Seattle"
 },
 {
   "ID": 2,
   "firstName": "Bob",
   "lastName": "Yellow",
   "homeTown": "Vancouver"
 },
 {
   "ID": 3,
   "firstName": "Claire",
   "lastName": "Xylitol",
   "homeTown": "Toledo"
 },
 {
   "ID": 4,
   "firstName": "Daniel",
   "lastName": "Winston",
   "homeTown": "Akron"
 },
 {
   "ID": 5,
   "firstName": "Edina",
   "lastName": "Veritas",
   "homeTown": "Wichita"
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