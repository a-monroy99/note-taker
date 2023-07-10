const express = require('express');
const path = require('path');
//const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname + "/public")));

//app.use('/', htmlRoutes);

// TODO 
//app.get('/', (req, res) => res.send('Navigate to /notes'));

// app.get('/', (req, res) => 
//     res.sendFile(path.join(__dirname, 'public/index.html'))
// );

//app.get('/api/notes', (req, res) => 
  //  res.sendFile(path.join(__dirname, 'public/notes.html'))
//);

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);