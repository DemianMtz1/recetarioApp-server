const recetaUseCases = require('../usecases/recetas');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const recetas = await recetaUseCases.getAll();

        res.status(200).json({
            success: true,
            message: 'All recetas',
            data: {
                recetas
            }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            data: null
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const receta = await recetaUseCases.getById(id);

        res.status(200).json({
            success: true,
            message: 'Receta',
            data: {
                receta
            }
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            data: null
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const { nombre, procedimiento, ingredientes, img } = req.body;
        if (!nombre || !procedimiento || !ingredientes || !img) {
            res.status(400).json({
                success: false,
                message: 'Bad request you should send \'nombre\',\'procedimiento\' and \'ingredientes\'',
                data: null
            })
            return;
        }
        const newReceta = await recetaUseCases.create({
            nombre,
            procedimiento,
            ingredientes
        });

        res.status(200).json({
            success: true,
            message: 'Nueva receta',
            data: {
                receta: newReceta
            }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            data: null
        })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const newData = req.body;
        const recetas = await recetaUseCases.updateById(id, newData);

        res.status(200).json({
            success: true,
            message: 'New data',
            data: {
                recetas
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            data: null
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const recetas = await recetaUseCases.removeById(id);

        res.status(200).json({
            success: true,
            message: 'Removed',
            data: {
                recetas
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            data: null
        })
    }
})

module.exports = router;