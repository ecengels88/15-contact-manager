export function findAll(contacts) {
  return {
    type: 'CONTACT@FIND_ALL',
    data: contacts
  };
}

export function create(formData) {
  return {
    type: 'CONTACT@CREATE',
    data: { ...formData, id: (new Date()).toString() },
  };
}

export function remove(id) {
  return {
    type: 'CONTACT@REMOVE',
    id,
  };
}
