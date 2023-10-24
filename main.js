/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/WidgetCollapse.js
class WidgetCollapse {
  constructor(container) {
    this.container = container;
  }
  init() {
    this.bindToDOM();
    this.registerEvents();
  }
  bindToDOM() {
    const collapse = document.createElement('div');
    collapse.classList.add('collapse');
    collapse.innerHTML = `
      <div class="collapse__container">
        <button type="button" class="collapse__btn">Collapse</button>
        <div class="collapse__content collapse__content_visible">
          <p class="collapse__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aliquid, soluta doloribus velit tempore quos quo rerum veniam. 
            Eaque similique mollitia perspiciatis! Dolorem facere quo fuga cum? 
            Quis debitis culpa numquam.</p>
        </div>
      </div>
    `;
    this.container.append(collapse);
    this.btnCollapse = this.container.querySelector('.collapse__btn');
    this.hiddenText = this.container.querySelector('.collapse__content');
  }
  registerEvents() {
    this.btnCollapse.addEventListener('click', () => {
      this.hiddenText.classList.toggle('collapse__content_visible');
      this.hiddenText.classList.toggle('collapse__content_collapsed');
    });
  }
}
;// CONCATENATED MODULE: ./src/js/WidgetChat.js
class WidgetChat {
  constructor(container) {
    this.container = container;
  }
  init() {
    this.bindToDOM();
    this.registerEvents();
  }
  bindToDOM() {
    const chat = document.createElement('div');
    chat.classList.add('chat');
    chat.innerHTML = `
      <div class="chat__control">
        <button type="button" class="chat__btn-open"></button>
      </div>
      <div class="chat__block">
        <h2 class="chat__title">Напишите  нам</h2>
        <textarea name="" class="chat__message"></textarea>
        <button class="chat__btn-send">Отправить</button>
        <button type="button" class="chat__btn-close">
          <img src="./images/cross.svg" alt="">
        </button>
      </div>
    `;
    this.container.append(chat);
    this.btnOpen = chat.querySelector('.chat__btn-open');
    this.btnClose = chat.querySelector('.chat__btn-close');
    this.chatWindow = chat.querySelector('.chat__block');
  }
  registerEvents() {
    this.btnOpen.addEventListener('click', () => {
      this.btnOpen.classList.add('chat__btn-open_hidden');
      this.chatWindow.classList.add('chat__block_visible');
    });
    this.btnClose.addEventListener('click', () => {
      this.chatWindow.classList.remove('chat__block_visible');
      this.btnOpen.classList.remove('chat__btn-open_hidden');
    });
  }
}
;// CONCATENATED MODULE: ./src/js/WidgetLiker.js
class WidgetLiker {
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
;// CONCATENATED MODULE: ./src/js/app.js



const root = document.querySelector('.root');
const collapse = new WidgetCollapse(root);
collapse.init();
const chat = new WidgetChat(root);
chat.init();
const liker = new WidgetLiker(root);
liker.init();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;
//# sourceMappingURL=main.js.map