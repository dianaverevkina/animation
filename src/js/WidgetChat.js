export default class WidgetChat {
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
