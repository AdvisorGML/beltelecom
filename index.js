// import fetch from "node-fetch";

async function getIp() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://ip-api.com/json');
  xhr.responseType = 'json';
  xhr.send();
  xhr.onload = function () {
    let responseObj = xhr.response;
    console.log(responseObj); // Привет, мир!

saveData(responseObj.query);

    return responseObj;
  };
}

function saveData(data) {
  const fs = require('fs');
  fs.appendFile('log.txt', `${data}\n`, function (error) {
    if (error) throw error; // если возникла ошибка

    console.log('Запись файла завершена. Содержимое файла:');
    let data = fs.readFileSync('log.txt', 'utf8');
    console.log(data); // выводим считанные данные
  });
}
getIp();
// saveData(response.query);
