const CoinGecko = require('coingecko-api');
 
//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();
 
//3. Make calls
var func = async() => {
    
  let data = await CoinGeckoClient.coins.all();
  console.log("Coins:");
  var obj = data.data;

//console. log(obj. result);
 // console.log(data.data);
 for (parse of obj) {  
    console.log(`The id is: ${parse.id} and the name is: ${parse.name}`)
  } 
};




func();