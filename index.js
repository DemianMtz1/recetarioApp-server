const app = require('./src/server');
const connectDB = require('./src/lib/db');
require('dotenv').config();

const PORT = process.env.PORT || 8080;
const url = process.env.DB_URL;

connectDB(url)
    .then(() => {
        console.log('DB Connected');
        app.listen(PORT, () => {

            console.log('Server listening on Port: ', PORT)
        })
    })
    .catch(err => {
        console.log(err)
    })
