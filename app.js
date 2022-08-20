const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const shopRoutes = require('./routes/shop');

//1. Import coingecko-api
const CoinGecko = require('coingecko-api');
 
//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();
 
//3. Make calls
var func = async() => {
  let data = await CoinGeckoClient.ping();
    console.log('Hello, the response is:' + data.message)
};

func();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  // User.findById(1)
  //   .then(user => {
  //     req.user = user;
  //     next();
  //   })
  //   .catch(err => console.log(err));
  func();
  next();
});

app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  app.listen(3000);
});
