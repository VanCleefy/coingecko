var http = require('http');
var request = require('request');

http.createServer(function (req, res) {
    
    var options = {
      'method': 'GET',
      'url': 'https://bz.labs.lenovo.com/rest/bug?id=240185&include_fields=status,id,creation_time,assigned_to&api_key=qVX4gzBBy3CeuheLMCPPNEX3fk3nafn8DczMhAQP',
      'headers': {
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
      //res.write(response.body);
    }
    //res.write("Oi");
    );


    //res.write(response.body);

    //
    return res.end();
  
}).listen(8080);
