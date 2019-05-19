const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
  console.log(`Its OVER \n http://localhost:9000 !!!`);
});
