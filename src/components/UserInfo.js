
// Клсс UserInfo
export default class UserInfo {
  constructor({ name, job }) {
    this._name = document.querySelector(name);
    this._job = document.querySelector(job);
  }

  // Получаем информацию из профиля
  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      job: this._job.textContent
    }
    return userData
  }

  // Вставляем информацию в профиль из инпутов
  setUserInfo(name, job) {
    this._name.textContent = name;
    this._job.textContent = job
  }
}
