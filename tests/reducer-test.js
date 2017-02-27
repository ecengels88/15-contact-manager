import reducer from '../app/reducer';

module('reducer', () => {
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });
});

test('load all contacts', (assert) => {
  const oldState = { contacts: [] };
  const actionOne = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'John', lastName: 'Cena' }] };

  assert.deepEqual(reducer(oldState, actionOne), { contacts: actionOne.data });
});
