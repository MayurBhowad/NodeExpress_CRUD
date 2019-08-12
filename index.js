//IMPORTING MODULES
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv/config')


const app = express();

//DATABASE CONNECTION
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    ('connected', () => {
        console.log('db connected');
    }),
    ('error', (err) => {
        if (err) {
            console.log('Error: ' + err);
        }
    }));

// mongoose.connection.on('connected', () => {
//     console.log('DB connected!');
// });

// mongoose.connection.on('error', (err)=>{
//     if(err){
//         console.log('Error: '+err);
//     }
// });

const route = require('./routes/route');

//PORT NO
const port = 3000;

//MIDDLEWARE
app.use(cors());
app.use(bodyparser.json());

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

//ROUTES
app.use('/api', route);

//TESTING SERVER
app.get('/', (req, res) => {
    res.send('awesome...we are up!');
});

app.listen(port, () => {
    console.log('yo..I am up and Listning on port: ' + port);
});