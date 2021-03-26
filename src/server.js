const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs')
app.get('/',(req,res)=>{
    const absolutePathToHtmlFile = path.resolve(__dirname, '../dist/index.html');
    const contentOfHtmlFile = fs.readFileSync(absolutePathToHtmlFile, 'utf-8');
    res.send(contentOfHtmlFile);
});

app.use('/static', express.static(
    path.resolve(__dirname, '../dist')
));

app.listen(3000,()=>{
    console.log("server connect http://localhost:"+3000)
})