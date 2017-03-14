import reducer from '../app/reducer';

module('reducer', () => {
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });
});

test('load all contacts', (assert) => {
  const emptyState = { contacts: [] };
  const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }] };
  const actionOne = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'John', lastName: 'Cena' }] };
  const actionTwo = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'Nic', lastName: 'Cage' }] };

  assert.deepEqual(reducer(emptyState, actionOne), { contacts: actionOne.data });
  assert.deepEqual(reducer(oldState, actionOne), { contacts: actionOne.data });
  assert.deepEqual(reducer(oldState, actionTwo), { contacts: actionTwo.data });
});

test('add a contact', (assert) => {
  const emptyState = { contacts: [] };
  const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }] };
  const actionOne = { type: 'CONTACT@CREATE', data: { firstName: 'Johnny', lastName: 'Depp' } };

  assert.deepEqual(reducer(emptyState, actionOne), { contacts: [actionOne.data] });
  assert.deepEqual(reducer(oldState, actionOne), { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }, actionOne.data] });
});

test('delete a contact', (assert) => {
  const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie', id: 1 }] };
  const actionOne = { type: 'CONTACT@REMOVE', id: 1 };
  const expectedState = { contacts: [] };

  assert.deepEqual(reducer(oldState, actionOne), expectedState);
});

test('delete a contact with two items', (assert) => {
  const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie', id: 1 }, { firstName: 'Ron', lastName: 'Swanson', id: 2 }] };
  const actionOne = { type: 'CONTACT@REMOVE', id: 1 };
  const expectedState = { contacts: [{ firstName: 'Ron', lastName: 'Swanson', id: 2 }] };

  assert.deepEqual(reducer(oldState, actionOne), expectedState);
});

test('delete a contact without id', (assert) => {
  const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie', id: 1 }, { firstName: 'Ron', lastName: 'Swanson', id: 2 }] };
  const actionOne = { type: 'CONTACT@REMOVE', id: 3 };
  const expectedState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie', id: 1 }, { firstName: 'Ron', lastName: 'Swanson', id: 2 }] };

  assert.deepEqual(reducer(oldState, actionOne), expectedState);
});
