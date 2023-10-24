export default class WidgetLiker {
  constructor(container) {
    this.container = container;
  }

  init() {
    this.bindToDOM();
    this.registerEvents();
  }

  bindToDOM() {
    this.liker = document.createElement('div');
    this.liker.classList.add('liker');
    this.liker.innerHTML = `
      <div class="liker__container">
        <button type="button" class="liker__btn">Like</button>
      </div>
    `;

    this.container.append(this.liker);

    this.btnLike = this.liker.querySelector('.liker__btn');
  }

  registerEvents() {
    this.btnLike.addEventListener('click', () => {
      const like = this.createHeart();
      like.addEventListener('animationend', () => {
        like.remove();
      });
    });
  }

  // Создаем HTML элемент сердечка
  createHeart() {
    const like = document.createElement('div');
    like.classList.add('liker__like');
    like.innerHTML = '<img src="./images/heart.png">';
    this.defineDirection(like);

    this.liker.append(like);

    return like;
  }

  // Определяем траекторию лайка
  defineDirection(element) {
    const random = Math.ceil(Math.random() * 4);
    element.style.animationName = `like${random}`;
  }
}
