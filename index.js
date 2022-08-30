//This is a single line Node Comment
//Define a variable and place into it the http package(shared code) from node.js
let myhttp=require("http");
//Use dot notation in JavaScript to access an object(methods)and properties
let myserver=myhttp.createServer(
//createServer()takes some arguments to make it provide a useful http server
//1. function that will be run whenever the server receives an http request.
function(myrequest,myresponse){
 console.log(myrequest.url);
  //writeHead creates an http response header including the status code(200OK), and the Content type
  let mytext;
  if(myrequest.url==="/hello"){
    mytext="Hello To You";
  }else{mytext="I don't know you";}
myresponse.writeHead(200,{"Content-Type":"text:plain"});
  //end()returns some data and closes the response(sends it)
  myresponse.end(mytext + "\n");
}


);  //End createServer method
//ask http to start listening on a tcp port for incoming http requests
//listen() takes 2 arguments:1 tcp port #,string of the ip address to listen(0.0.0.0)
myserver.listen(8080,"0.0.0.0");
console.log("Server has started");