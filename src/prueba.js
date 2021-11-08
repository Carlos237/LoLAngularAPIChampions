var request = require('request');

var version = "8.1.1"
var championId = 40;

getChampName(championId);

function getChampName(id) {
  request('http://ddragon.leagueoflegends.com/cdn/' + version + '/data/de_DE/champion.json', function (error, response, body) {

    let list = JSON.parse(body);
    let championList = list.data;

    for (var i in championList) {

      if (championList[i].key == id) {
        console.log(championList[i].id)
      }

      //console.log(championList[i].id + " | " + championList[i].key);
    }

  });
}