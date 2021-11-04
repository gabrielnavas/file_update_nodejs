const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')
const path = require('path')

routes.post('/post', multer(multerConfig).single('file'), (req,res) => {
  console.log(req.file);
  return res.status(201).json()
})


routes.get('/post/:photo', (req,res) => {
  try{
    return res.status(200).sendFile(path.resolve(__dirname, '..', 'tmp', 'uploads', req.params.photo))
  }
  catch(ex) {
    console.log(ex);
    return res.status(500).json()
  }
})


module.exports = routes