'use strict'

function prueba(req, res) {
    if (req.params.nombre) {
        var nombre = req.params.nombre;
    } else {
        var nombre = "Sin nombre";
    }
    
    res.status(200).send({
        data:[2,3,4],
        texto:"Hola mundo con NodeJS y EXPRESS" + nombre});
}

function getFavorito(req, res) {
    var favoritoId = req.params.id;

    res.status(200).send({data:favoritoId});
}

function getFavoritos(req, res) {
    
}

function saveFavorito(req, res) {
    
}

function updateFavorito(req, res) {
    
}

function deleteFavorito(req, res) {
    
}

module.exports = {
    prueba,
    getFavorito,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}