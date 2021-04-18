const fs = require("fs");
const https = require('https');

const uri = "https://jsonplaceholder.typicode.com/posts";

https.get(uri, (resp) => {
  let data = '';

  resp.on('data', (val) => {
    data += val;
  });

  resp.on('end', () => {
    fs.writeFile("./result/post.json", data, (error) => {
        if(error) throw error;
    })
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});