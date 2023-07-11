const express = require('express')
const app = express()
const port = 3000
app.get('/sign', async (req, res) => {

})

app.listen(port, () => {
    console.log('Article : Application for Sign URL ')
    console.log('Application is running in port: ',port)
  })