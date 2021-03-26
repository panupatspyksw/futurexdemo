const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs')
const port = process.env.PORT || 3000
app.get('/',(req,res)=>{
    const absolutePathToHtmlFile = path.resolve(__dirname, '../dist/index.html');
    const contentOfHtmlFile = fs.readFileSync(absolutePathToHtmlFile, 'utf-8');
    res.send(contentOfHtmlFile);
});

app.use('/static', express.static(
    path.resolve(__dirname, '../dist')
));

app.listen(port,()=>{
    console.log("server connect ");
})