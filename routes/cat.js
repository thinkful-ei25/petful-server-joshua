'use strict';

const express = require('express');
const mongoose = require('mongoose');

const Cat = require('../models/cat');

const router = express.Router();


//Get

router.get('/api/cat', (req, res, next) => {
  Cat.find()
})