const express = require('express');
const cors = require('cors');
const recetasRouter = require('./routers/recetas');

const app = express();

app.use(cors());
app.use(express.json());

// routers
app.use('/recetas',recetasRouter);

app.get('/', (req,res)=> {
    res.status(200).json({
        success: true,
        message: 'Default root',
        data: null
    })
})

module.exports = app;