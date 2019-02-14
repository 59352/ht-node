const express = require('express');
const path = require ('path')
const router = express.Router();
const clienthPath = path.join(__dirname, 'client');
const app = express();
const jsonParser = express.json();
const myData = [{'id':'1', 'ip':'2', 'price':'100'}, 
             {'id':'2', 'ip':'3', 'price':'1500'},
             {'id':'3', 'ip':'4', 'price':'1600'}];

router.get('/', (req, res, next)=>{
    res.get('index', {title: 'my first data request'});
  });

app.get('/testajax', (req, res, next)=>{
    const allUsers = Object.keys(myData);
  res.send(JSON.stringify(myData));
});

app.use(express.static(clienthPath));

app.listen('3000', () => {
    console.log(`server has been started on port ${"3000"}`)
})

