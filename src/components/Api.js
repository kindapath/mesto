import { data } from "autoprefixer";

export default class Api {
  constructor({ baseUrl, headers, handleUserInfo }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._authorization = headers.authorization;
    this._handleUserInfo = handleUserInfo;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
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

      .catch((err) => {
        console.log(err);
      });
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
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
      .catch((err) => {
        console.log(err);
      });
  }
}
