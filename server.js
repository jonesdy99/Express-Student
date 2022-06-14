// import modules

import express from 'express'
import { sauce } from './data/SAUCE-data.js'

// Create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine','ejs')


// Mount Middleware (app.use)



// Mount routes
// app.get('/',function(req, res){
//   res.send('<h1>AYO where the sauce?!</h1>')
// })

app.get('/home',function(req,res){
  res.render('home')
})

app.get('/home',function(req,res){
  res.send('<h1>Home Page for ALL THE SAUCE</h1>')
})
  
app.get('/sauce',function(req,res){
  res.render('sauce/index', {
    sauce: sauce
  })
})

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})