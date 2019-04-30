const debug = require('debug')('app:startup');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const genres = require('./routes/genres');

const app = express();

app.use(express.json());
app.use(helmet());
app.use('/api/genres', genres);

if(app.get('env') === 'development') {
    app.use(morgan('tiny'));
    debug('Morgan enabled...')
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port} yo...`)
})