// 引入 documentdb 模組
var documentdb = require("documentdb");
var config = require("./config");
 
// 透過 DocumentDB 帳號基本資料，建立 DocumentDB 的 DocumentClient 物件
var urlConnection = "https://testyoubikedb.documents.azure.com:443/";                  
var auth = { 
    "masterKey": "jnjYPbVWgXVmZ2/9iHvGvEeLVvJ2DP0hUbn+Xwt3keay5NfRgnjXlPaNdMHZAUNUmMWTzfRaISr+SunXIWqbuw=="
};
var client = new documentdb.DocumentClient(urlConnection, auth);
 
// 定義 Database 與 Collection 的名稱，以及 Document 內容
var databaseDefinition = { 
    "id": "youbikes" 
};
 
var collectionDefinition = { 
    "id": "youbikecollection" 
};
 
var documentDefinition = {
    "city": "BEVERLY",
    "loc": [-97.981785, 38.984416],
    "pop": 389,
    "state": "KS",
    "id": "67423"
};
var jsonObj = require("./YouBikeTP_2.json");
//console.log(JSON.stringify(jsonObj.retVal));
var youbikelist = Object.keys(jsonObj.retVal).map(function(value){
                                                    return jsonObj.retVal[value]})
//console.log(youbikelist[0]);

// 透過 Callback 方式呼叫 DocumentClient 物件的 createDatabase、createCollection、與 createDocument 方法
/*
client.createDatabase(databaseDefinition, function(err, database) {
    if (err) return console.log(err);        
    console.log("Database created.");
 
    client.createCollection(database._self, collectionDefinition, function(err, collection) {
        if (err) return console.log(err);
        console.log("Collection created.");
        for(i=0;i<youbikelist.length;i++){
            client.createDocument(collection._self, youbikelist[i], function(err, document) {
            if (err) return console.log(err);
             console.log("Document created with content: ", document);
        });
        }
        
    });
});
*/
/*
var collectionUri = "dbs/" + config.dbDefinition.id + "/colls/" + config.collDefinition.id;
 for(i=0;i<youbikelist.length;i++){
            client.createDocument(collectionUri, youbikelist[i], function(err, document) {
            if (err) return console.log(err);
             console.log("Document created with content: ", document);
        });
    }
    */
/*
var docQuery = 'SELECT * FROM d WHERE d.sno="0001"';
var collectionUri = "dbs/" + config.dbDefinition.id + "/colls/" + config.collDefinition.id;
client.queryDocuments(collectionUri, docQuery)
    .forEach(function (err, document) {
        if (!err) {
            if (!document) {
                // after the last document has been  
                // reached, the returned resource/doc 
                // will be undefined
                //
                console.log('no more documents!!!');
            }
            else {
                console.log('document found: ' + document.tot);
            }
        }
    });
    */
var queryCollection = function(documentId, callback) {
  var querySpec = {
      query: 'SELECT * FROM root r WHERE r.sno=@sno',
      parameters: [{
          name: '@sno',
          value: documentId
      }]
  };

  var collectionUri = "dbs/" + config.dbDefinition.id + "/colls/" + config.collDefinition.id;

  client.queryDocuments(collectionUri, querySpec).toArray(function(err, results) {
      if(err) 
        return callback(err);

      callback(null, results);
  });
};

queryCollection("0001", function(err, results) {
    if(err) return console.log(err);
    console.log(results.length);
    console.log(typeof(results));
    // console.log('Query results:\n' + JSON.stringify(results, null, '\t') + '\n');
    console.log('Query results:\n' + results[1].mday +'\n');
});