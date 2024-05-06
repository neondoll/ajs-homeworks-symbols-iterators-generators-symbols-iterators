import Character from '../Character';
import CharacterTypes from '../../data/CharacterTypes';

test.each([
  ['number', 10],
  ['less than 2', 'i'],
  ['longer than 10', 'abandonment'],
])('Testing character creation with a name exception where the passed name is %s', (_, name) => {
  expect(() => new Character(name, CharacterTypes.bowman)).toThrow(Error);
});

test('Testing character creation with type exception', () => {
  expect(() => new Character('character', 'Character')).toThrow(Error);
});

test('Testing character creation', () => {
  const result = new Character('character', CharacterTypes.bowman);

  expect(result).toEqual({
    name: 'character',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  });
});
