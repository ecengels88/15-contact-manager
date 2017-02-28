import ContactFormView from '../view/contact-form';

export default class AppController {
  constructor(el, store) {
    this.el = el;
    this.store = store;

    this.ContactFormView = new ContactFormView(this.el.querySelector('.sidebar'), this.store);
  }

  created() {
    // setup listening (with subscribe function) to store in order to save localstorage
    this.store.subscribe(() => {
      window.localStorage.contacts = JSON.stringify(this.store.getState().contacts);
    });

    this.ContactFormView.mounted();

    // load data from localstorage to start the app
    this.store.dispatch({
      type: 'CONTACT@FIND_ALL',
      contacts: JSON.parse(window.localStorage.contacts || '[]')
    });
  }
}
