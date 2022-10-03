const express = require('express');
const bodyParser = require('body-parser');
const model = require ('./models');
const AddD = require ('./controller/student.controller.js');
const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/add', AddD.AddS);

app.get('/', (req, res) => {
res.send(" kese h app ?")
})

app.listen(4000, (err) => {
    if (err) {
        console.log(err);
        return;
}
console.log('Listening on port 4000');
});
