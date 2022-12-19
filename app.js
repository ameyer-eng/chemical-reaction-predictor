const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, ()=>{
    console.log("app listening on port 3000");
})

app.get('/chemical', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})