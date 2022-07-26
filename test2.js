const { MongoClient } = require("mongodb");

async function main() {

	// Connection URI
	const uri ="mongodb+srv://m001-student:m001-student@sandbox.vmxtn.mongodb.net/Sandbox?retryWrites=true&w=majority";
	const dbName = "sample_airbnb";
	// Create a new MongoClient
	const client = new MongoClient(uri);
	//console.log(client);
    	// Connect the client to the server
    	//await client.connect();
	    client
      		.connect()
      		.then(
        client =>
          client
            .db(dbName)
            .listCollections()
            .toArray("collectionsArray") // Returns a promise that will resolve to the list of the collections

      )
	  .then()
      .then(cols => console.log("Collections:", cols))
	  .then(await listDatabases(client), console.log("DB is listed."))
      .finally(() => client.close(console.log("Closing.")));
        //await listDatabases(client);
}

main().catch(console.error);


	async function listDatabases(client){
		const databaseList = await client.db().admin().listDatabases();
		console.log("Databases:");
		databaseList.databases.forEach(db => {
		console.log(` - ${db.name}`);
		})
	}
