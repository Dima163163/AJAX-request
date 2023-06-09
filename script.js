"use strict";

// const getData = (url) => {
//   return fetch(url)
//     .then((response) => response.json())
//     .catch((error) => console.log(error));
// };

// const sendData = (url, data) => {
//   return fetch(url, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };

// getData("db.json").then((data) =>
//   sendData("https://jsonplaceholder.typicode.com/posts", data)
// );
const url = "db.json";
function getFile(url) {
  //Создаем объект запроса
  const xhr = new XMLHttpRequest();
  //Куда посылаем и параметры
  xhr.open("GET", url, true);

  xhr.responseType = "json";
  //как обрабатываем ответ сервера
  xhr.onload = function () {
    if (xhr.status >= 400) {
      console.log(xhr.response);
    } else {
      console.log(xhr.status);
      console.log(xhr.response);
      const data = xhr.response;
      console.log(data);
      sendFileToApi(data);
    }
  };

  xhr.onerror = () => {
    console.log(xhr.response);
  };

  //посылаем запрос
  xhr.send();
}

function sendFileToApi(file) {
  //Создаем объект запроса
  let xhr = new XMLHttpRequest();

  //Конфигурируем
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);

  xhr.setRequestHeader("Content-type", "application/json");

  //Обработчик ответа
  xhr.onload = function () {
    if (xhr.status >= 400) {
      console.log(xhr.response);
    } else {
      console.log(xhr.status);
      console.log(xhr.response);
    }
  };
  //Отправляем запрос
  xhr.send(JSON.stringify(file));
}

getFile(url);
