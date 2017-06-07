class UsersList {
  
  constructor(initialUsers) {
    this.list = []; // здесь храним пользователей в формате list[уникальный id] === имя пользователя
    this.map = []; // здесь храним алфавитный порядок в формате map[порядковый номер] === уникальный id
    if (initialUsers === undefined) {
      this.list = [];
    } else {
      this.list = initialUsers;
      // если передан initialUsers, создаем для него изначальный map
      this.map = this.list.map((item, id) => id).sort((id1, id2) => this._sortFn(this.list[id1], this.list[id2]));
    }
  }
  
  _normalizeWord(word) {
    word = word.trim().toLowerCase();
    return word.charAt(0).toUpperCase() + word.substr(1);
  }
  
  _normalize(name, surname) {
    return `${this._normalizeWord(name)} ${this._normalizeWord(surname)}`;
  }
  
  _sortFn(item1, item2) {
    return item1 > item2;
  }
  
  _addToMap(fullname, id) {
    // определяем правильную позицию id нового пользователя в map
    const position = this.map.findIndex(id => this._sortFn(this.list[id], fullname));
    // вставляем id в map
    if (position === -1) this.map.push(id);
    else this.map.splice(position, 0, id)
  }
  
  _deleteFromMap(id) {
    // находим позицию id, который нужно удалить
    let position = this.map.findIndex(mapId => mapId === id);
    // удаляем id из map
    this.map.splice(position, 1);
  }
  
  getList() {
    // на основе map создаем алфавитно упорядоченный массив пользователей
    return this.map.map(id => this.list[id]);
  }
  
  add(name, surname) {
    const fullname = this._normalize(name, surname);
    // добавляем пользователя в list
    const id = this.list.push(fullname) - 1;
    // добавляем его id в map на правильную позицию
    this._addToMap(fullname, id);
    return id;
  }
  
  edit(id, name, surname) {
    // удаляем id из map
    this._deleteFromMap(id);
    const fullname = this._normalize(name, surname);
    // меняем имя в list
    this.list[id] = fullname;
    // вставляем id в map на новую позицию
    this._addToMap(fullname, id);
  }
  
  delete(id) {
    // делаем пользователя null в list
    this.list[id] = null;
    // удаляем id из map
    this._deleteFromMap(id);
  }
}
