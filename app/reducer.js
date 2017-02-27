export default function reducer(state, action) {
  switch (action.type) {
    case 'CONTACT@FIND_ALL':
      return { contacts: action.data };
  }
}
