var http = require('http');
var request = require('request');

http.createServer(function (req, res) {
    
    var options = {
      'method': 'GET',
      'url': 'https://api.coingecko.com/api/v3/search?query=btc',
      'headers': {
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
      //res.write(response.body);
    }
    
    );


    //res.write(response.body);

    //
    return res.end();
  
}).listen(8080);
