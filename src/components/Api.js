export default class Api {
  constructor({ baseUrl, headers, handleUserInfo }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._authorization = headers.authorization;
    this._handleUserInfo = handleUserInfo;
  }

  getInitialCards() {
    return fetch(this._baseUrl, {
      headers: {
        authorization: this._authorization
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  getUserInfo() {
    return fetch(this._baseUrl, {
      headers: {
        authorization: this._authorization
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((data) => {
        this._handleUserInfo(data.name, data.about, data.avatar)
      })
  }
}
