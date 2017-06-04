### Задание 1. На общее знание JS.

Задача - создать класс UsersList, в котором будут храниться имена и фамилии пользователей. Конструктор должен принимать один опциональный аргумент - массив, содержащий имена и фамилии пользователей, которые UsersList будет содержать изначально.

```javascript
var myUsersList = new UsersList();
// создаем изначально пустой UsersList
var anotherUsersList = new UsersList(['Вася Иванов', 'Коля Тяпкин', 'Рита Осянина']);
// создаем UsersList, уже содержащий несколько пользователей
```
UsersList должен иметь следующие методы:

#### list()

Должен вернуть массив текущих содержащихся в UsersList пользователей **в алфавитном порядке**

```javascript
var myList = new UsersList(['Вася Иванов', 'Рита Осянина', 'Коля Тяпкин']);
var users = myList.list();
console.log(users); // ['Вася Иванов', 'Коля Тяпкин', 'Рита Осянина']
```

#### add(name, surname)

Принимает два аргумента - имя и фамилию пользователя. По условию задачи они являются строками, это проверять не надо. Но при необходимости их нужно нормализовать, добавив и/или удалив где нужно UpperCase, и убрав лишние пробелы с начала и с конца, т.е.:

    "вася", "иванов" должно превратиться в "Вася", "Иванов"
    "КОлЯ", "  тяпкин " -> "Коля", "Тяпкин"
    "Рита  ", "осянина" -> "Рита", "Осянина"
    
После этого они должны быть объединены в одну строку, при этом разделены пробелом, и добавлены в UsersList:

```javascript
var myList = new UsersList();
myList.add(' АнТоН ', 'шумилин');
console.log(myList.list()); // ['Антон Шумилин']
```

Метод должен вернуть число, которое будет уникальным идентификатором этого пользователя. По этому идентификатору пользователя должно быть можно удалить из UsersList или изменить его имя в двух следующих методах

#### rename(id, newName, newSurname)

Переименовывает пользователя с указанным id. Id будет числом. Для newName и newSurname действуют те же правила нормализации, что и в методе add.

```javascript
var myList = new UsersList();
var vasyaId = myList.add('Вася', 'Иванов');
console.log(myList.list()); // ['Вася Иванов']
myList.rename(vasyaId, 'коля', 'тяпкин');
console.log(myList.list()); // ['Коля Тяпкин']
```

#### delete(id)

Удаляет пользователя с указанным id из UsersList.

```javascript
var myList = new UsersList(['Коля Тяпкин']);
var vasyaId = myList.add('Вася', 'Иванов');
console.log(myList.list()); // ['Вася Иванов', 'Коля Тяпкин']
myList.delete(vasyaId);
console.log(myList.list()); // ['Коля Тяпкин']
```
### Задание 2. На работу с асинхронщиной.

Если ты знаком с промисами, бери соответствующий вариант. Если нет, ничего страшного, разберемся по ходу.

```javascript
// вариант с коллбэком
getRandomAsync(callback) {
  callback(Math.random() > 0.5);
}

// вариант с промисами
getRandomPromise() {
  return new Promise((res, rej) => {
    getRandomAsync(res)
  });
}
```

Необходимо написать функцию, которая выполнит getRandomAsync/getRandomPromise последовательно 7 раз. После этого вернуть массив из результатов выполнения в коллбэк, либо вернуть промис, который заресолвится с результатом выполнения

```javascript
// вариант с коллбэком
getResults(function (results) {
  console.log(results); // [true, true, false, true, false, false, true]
}

// вариант с промисами

getResults().then(function (results) {
  console.log(results); // [true, false, true, true, false, true, true]
});
