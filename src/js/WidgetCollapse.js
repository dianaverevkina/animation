export default class WidgetCollapse {
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
