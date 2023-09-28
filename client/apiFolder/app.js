const express = require('express');
const app = express();
const data = require('./AllData.json');
const { generatePath } = require('./utils/generatePath');
const cors = require('cors');


app.use(cors());

app.get("/", (req, res) => {
    res.sendFile('/index.html', {root: __dirname })
});

app.get("/api/v1/menu", (req, res) => {
    res.send(data.products)
});

app.get("/api/v1/giftcard", (req, res) => {
    res.send(data.giftcard)
});

app.get("/api/v1/categories", (req, res) => {
    res.send(data.category)
});

app.get("/api/v1/menu/:category", (req, res) => {

    const filteredData = data.products.filter(item => generatePath(item.subcategory) === req.params.category)
    res.send(filteredData)
});

app.get("/api/v1/menu/:category/:product", (req, res) => {
    const findElement = data.products.find(item => generatePath(item.name) === req.params.product)
    res.send(findElement)

});


console.log(data);

app.listen(3000, () => {
    console.log("application listening on http://localhost:3000");
});