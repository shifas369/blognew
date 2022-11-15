const express = require('express');
const cors=require('cors');
const logger = require('morgan');
const PORT = process.env.PORT || 3000
const app = new express();

require('./middleware/mongodb');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));


const path = require('path');
app.use(express.static(path.join(__dirname + '/dist/blog')));


const ArticleData = require('./models/article');

app.post('/api/article', async (req, res) => {
    try {
        console.log(req.body)

       let item=req.body;
        const newArticle = new ArticleData(item); //to check incoming data
        const saveArticle= await newArticle.save(); //mongodb save
        res.send(saveArticle);

    } catch (error) {
        console.log(error);
    }
})


app.get('/api/articlelist', async (req, res) => {
    try {
        const user = await ArticleData.find();
        res.send(user);
    } catch (error) {
        console.log(error);
    }

})


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/blog/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is connected ${PORT}`);
})