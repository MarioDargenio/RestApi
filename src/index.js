
// const express = require('express');   forma vieja
import app from './app.js'
import {PORT} from './config.js'
app.listen(PORT)

console.log('Server running on port: ', PORT)




