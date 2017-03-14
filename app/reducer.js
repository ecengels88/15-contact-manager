export default function reducer(state, action) {
  switch (action.type) {
    case 'CONTACT@CREATE':
      return { contacts: [...state.contacts, action.data] };
    case 'CONTACT@FIND_ALL':
      return { contacts: action.data };
    case 'CONTACT@REMOVE':
      return {
        contacts: state.contacts.filter(c => c.id !== action.id)
      };
    default:
      return state || { contacts: [] };
  }
}
