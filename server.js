const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');


var app = express();
var fs = require('fs');
app.use(express.static('public'));
// app.set('port', (process.env.PORT || 8080));
app.use(bodyParser.urlencoded({extended: false}));  // tells the server u r using middleware

//////////////////////////////////////
// switch these around when deploying
app.use(cors({credentials: true, origin: 'null'}));  // testing
// app.use(cors( { credentials: true, origin: 'null' } ));  // deployed
//////////////////////////////////////

app.get('/merch', (e, res) => {
  if (e) throw e;

  // **modify your existing code here**
  fs.readFile('/output/merch.txt', 'utf8', (e, data) => {
    if (e) throw e;
    console.log(data);
    res.send(data);
  });
});


app.get('/schedule', (e, res) => {
  if (e) throw e;

  // **modify your existing code here**
  fs.readFile('/output/schedule.txt', 'utf8', (e, data) => {
    if (e) throw e;
    console.log(data);
    res.send(data);
  });
});


app.get('/announcements', (e, res) => {
  if (e) throw e;

  // **modify your existing code here**
  fs.readFile('/output/announcements.txt', 'utf8', (e, data) => {
    if (e) throw e;
    console.log(data);
    res.send(data);
  });
});


app.get('/playlist', (e, res) => {
  if (e) throw e;

  // **modify your existing code here**
  fs.readFile('/output/playlist.txt', 'utf8', (e, data) => {
    if (e) throw e;
    console.log(data);
    res.send(data);
  });
});


app.get('/future', (e, res) => {
  if (e) throw e;

  // **modify your existing code here**
  fs.readFile('/output/futurePlaylistRequests.txt', 'utf8', (e, data) => {
    if (e) throw e;
    console.log(data);
    res.send(data);
  });
});

console.log("listening...");
app.listen(8080);