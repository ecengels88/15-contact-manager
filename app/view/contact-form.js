import { create } from '../actions';

export default class ContactFormView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    this.el.addEventListener('submit', (ev) => {
      ev.preventDefault();

      this.store.dispatch(create({
        firstName: this.el.querySelector('.firstname').value,
        lastName: this.el.querySelector('.lastname').value,
        street: this.el.querySelector('.street').value,
        city: this.el.querySelector('.city').value,
        state: this.el.querySelector('.state').value,
      }));
    });
  }
}
