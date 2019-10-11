'use strict'

var express = require('express');
var favoritoController = require('../controllers/favorito');

var api = express.Router();

api.get('/prueba/:nombre?', favoritoController.prueba);
api.get('/favorito/:id', favoritoController.getFavorito);

module.exports = api;