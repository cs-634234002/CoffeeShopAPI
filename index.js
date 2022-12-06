const express = require('express')
const cors = require('cors')
const app = express()

//dotenv
const dotenv = require('dotenv');
dotenv.config();


const port = process.env.PORT || 3000


app.listen(port, () => {
  console.log(`Coffee Shop API ... listening at http://localhost:${port}`)
});

//---JSON and URL Encode
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(cors());



require('./routes/index')(app)