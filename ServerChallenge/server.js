const express = require('express');
const port = 3005;

const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Hey Hey</h1>')
})
app.listen(port, ()=>{
    console.log(`server is listening on port: ${port}`)
});