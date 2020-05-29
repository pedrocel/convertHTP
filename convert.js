const express = require('express');
const fs = require('fs');
var webshot = require('node-webshot');

var options = {
    streamType: "pdf",
    windowSize: {
        width: 1024,
        height: 784
    },
    shotSize: {
        width: "all",
        height: "all"
    }
};

const router = express.Router();
var bodyParser = require('body-parser');
var app = express();
router.use(bodyParser.json());

router.post('/', (req, res) => {

    var fileName = Date.    now()/1000;
    var nameSpace = __dirname+"/downloads/";
    var rota = req.body["linkBoleto"];
    var fileType = ".pdf";

    webshot(rota, nameSpace + fileName + fileType, options, (err) => {
        if(err){
            return console.log(err);
        }  res.sendFile(__dirname+'/downloads/'+fileName+".pdf", "downloiad.pdf", function(err){
            console.log(err);
          
          });
    });
});

module.exports = router;