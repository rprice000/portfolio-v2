/* Server File */
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'client/public');
const port = process.env.PORT || 5001;

app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });



 app.listen(port, () => {
    console.log('Server is up!');
 });

//  http://localhost:5001