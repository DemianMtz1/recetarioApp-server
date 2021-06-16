const mongoose = require('mongoose');

const recetaSchema = mongoose.Schema({
    nombre: {
        type: String,
        minLength: 2,
        required: true
    },
    procedimiento: {
        type: String,
        minLength: 2,
        required: true
    },
    ingredientes: {
        type: [{
            nombreIngrediente: {
                type: String,
                required: true
            },
            gramos: {
                type: Number,
                required: true
            }
        }],
        required: true
    },
    img: {
        type: String,
        minLength: 2,
        required: true
    }
})

const Receta = mongoose.model('recetas', recetaSchema);

module.exports = Receta;