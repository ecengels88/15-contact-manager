class ItemView {
  constructor(data, store) {
    this.data = data;
    this.store = store;

    this.el = document.createElement('div');
    this.el.classList.add('grid__item');

    this.el.innerHTML = `
      <div class="card">
        <div class="card__info">
          <h1 class="name"></h1>
          <p class="info address"></p>
          <p class="info citystate"></p>
        </div>
        <div class="card__button">
          <button class="button delete">Delete</button>
        </div>
      </div>`;
  }

  render() {
    this.el.querySelector('.name').innerText = `${this.data.lastName}, ${this.data.firstName}`;
    this.el.querySelector('.address').innerText = this.data.street;
    this.el.querySelector('.citystate').innerText = `${this.data.city}, ${this.data.state}`;
  }
}

export default class ContactListView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    this.store.subscribe(() => {
      this.render();
    });
  }

  render() {
    this.el.innerHTML = '';
    const contacts = this.store.getState().contacts;
    contacts.forEach((data) => {
      const view = new ItemView(data, this.store);
      view.render();

      this.el.appendChild(view.el);
    });
  }
}
