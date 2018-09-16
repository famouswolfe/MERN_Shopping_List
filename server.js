const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

//Bring in Items
const items = require('./routes/api/items');


//Initialize Express
const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// Database config
const db = require('./config/keys').mongoURI;

// Connect MongoDB
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Routes
app.use('/api/items', items);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    //Static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Server started on port ${port}`));

