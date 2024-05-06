import CharacterTypes from '../data/CharacterTypes';

const characterTypes = Object.values(CharacterTypes);

export default class Character {
  constructor(name, type, health = 100, level = 1, attack = 0, defence = 0) {
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name; // имя
    } else {
      throw new Error('Имя персонажа должно быть строкой длиной минимум 2 и максимум 10');
    }

    if (characterTypes.includes(type)) {
      this.type = type; // тип
    } else {
      throw new Error(`Персонаж должен быть одного из типов: ${characterTypes.join(', ')}`);
    }

    this.health = health; // уровень жизни
    this.level = level; // уровень персонажа
    this.attack = attack; // атака
    this.defence = defence; // защита
  }
}
