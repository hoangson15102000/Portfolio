const express = require('express');
const app = express();
const port = 3000;
// route tuyeens đường giống react route dom


app.get('/', (req, res) => {
    res.send('Hello World Nodemon')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log("Hello World");
})