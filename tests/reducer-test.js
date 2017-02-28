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

  assert.deepEqual(reducer(oldState, actionOne), { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }, actionOne.data] });
});
