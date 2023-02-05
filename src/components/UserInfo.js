
// Класс UserInfo
export default class UserInfo {
  constructor({ name, about, avatar }) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
  }

  // Получаем информацию из профиля
  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      about: this._about.textContent
    }
    return userData
  }

  // Вставляем информацию в профиль из инпутов
  setUserInfo(name, about) {
    this._name.textContent = name;
    this._about.textContent = about;

  }

  // Устанаваливаем аватар
  setUserAvatar(avatar) {
    this._avatar.src = avatar
  }
}
