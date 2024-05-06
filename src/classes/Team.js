export default class Team {
  constructor() {
    this.members = new Set();
  }

  // Делаем класс итерируемым
  [Symbol.iterator]() {
    // Более простая реализация итератора
    // return this.members.values();

    // Собственная реализация итератора
    const members = this.toArray();

    let currentMemberIndex = 0;

    return {
      next() {
        if (currentMemberIndex < members.length) {
          const value = members[currentMemberIndex];

          currentMemberIndex += 1;

          return { done: false, value };
        }

        return { done: true };
      },
    };
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже добавлен в команду!');
    }

    return this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => {
      if (!this.members.has(character)) {
        this.members.add(character);
      }
    });

    return this.members;
  }

  toArray() {
    return [...this.members];
  }
}
