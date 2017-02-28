export function findAll(contacts) {
  return {
    type: 'CONTACT@FIND_ALL',
    data: contacts
  };
}

export function create(contacts) {
  return {
    type: 'CONTACT@CREATE',
    data: contacts,
    id: new Date()
  };
}

export function remove(id) {
  return {
    type: 'CONTACT@REMOVE',
    id,
  };
}
