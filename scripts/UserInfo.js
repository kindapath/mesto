import { nameInput , jobInput } from './utils.js';

export default class UserInfo {
  constructor({ name, job }) {
    this._name = document.querySelector(name);
    this._job = document.querySelector(job);
  }

  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      job: this._job.textContent
    }
    return userData
  }

  setUserInfo() {
    this._name.textContent = nameInput.value
    this._job.textContent = jobInput.value
  }
}
