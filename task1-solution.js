class UsersList {
  
  /*
    Объявление полей вне конструктора из ES6.
    Аналогично
    
    constructor() {
      this.list = [];
      this.map = [];
    }
    
  */
  
  list = []; // Храним пользователей в формате id -> полное имя
  map = []; // Храним алфавитный порядок в формате порядковый номер -> id
  
  constructor(initialUsers) {
    if (initialUsers === undefined) return;
    initialUsers.forEach(user => {
      let id = this.list.push(user);
      this.map.push(this.id);
    });
    this.map = this.map.sort(id1, id2 => this._sortFn(this.list[id1], this.list[id2])); 
  }
  
  _normalizeWord(word) {
    word = word.trim().toLowerCase();
    word[0] = word.charAt(0).toUpperCase();
    return word;
  }
  
  _normalize(name, surname) {
    return `${this.normalizeWord(name)} ${this.normalizeWord(surname)}`;
  }
  
  _sortFn(item1, item2) {
    return item1 > item2;
  }
  
  _addToMap(fullname, id) {
    const position = this.map.find((id) => this._sortFn(this.list[id], fullname);
    this.map.splice(position, 0, id);
  }
  
  _deleteFromMap(id) {
    let position = this.map.findId(mapId => mapId === id);
    this.map.splice(position, 1);
  }
  
  list() {
    return this.map.map(id => list[id]);
  }
  
  add(name, surname) {
    const fullname = this._normalize(name, surname);
    const id = this.list.push(fullname);
    this._addToMap(fullname, id);
    return id;
  }
  
  edit(id, name, surname) {
    this._deleteFromMap(id);
    const fullname = this._normalize(name, surname);
    this.list[id] = fullname;
    this.addToMap(id, fullname);
  }
  
  delete(id) {
    this.list[id] = null;
    this._deleteFromMap(id);
  }
}