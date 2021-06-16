const Receta = require('../models/recetas');

function getAll() {
    return Receta.find({});
}

function getById(id) {
    return Receta.findById(id);
}

function create({ nombre, procedimiento, ingredientes, img }) {
    return Receta.create({ nombre, procedimiento, ingredientes, img });
}

function removeById(id) {
    return Receta.findByIdAndDelete(id);
}
function updateById(id, dataToUpdate) {
    return Receta.findByIdAndUpdate(id, dataToUpdate)
}

module.exports = {
    getAll,
    getById,
    create,
    removeById,
    updateById
};