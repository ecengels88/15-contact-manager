import ContactFormView from '../view/contact-form';
import ContactListView from '../view/contact-list';

export default class AppController {
  constructor(el, store) {
    this.el = el;
    this.store = store;

    this.ContactFormView = new ContactFormView(this.el.querySelector('.sidebar'), this.store);
    this.ContactListView = new ContactListView(this.el.querySelector('.grid__item'), this.store);
  }

  created() {
    // setup listening (with subscribe function) to store in order to save localstorage
    this.store.subscribe(() => {
      window.localStorage.contacts = JSON.stringify(this.store.getState().contacts);
    });

    this.ContactFormView.mounted();
    this.ContactListView.mounted();

    // load data from localstorage to start the app
    this.store.dispatch({
      type: 'CONTACT@FIND_ALL',
      contacts: JSON.parse(window.localStorage.contacts || '[]')
    });
  }
}
