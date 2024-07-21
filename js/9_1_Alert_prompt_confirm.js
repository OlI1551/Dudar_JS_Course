/* Для работы с пользователем в JavaScript предусмотрено несколько интерактивных функций:

функция alert() позволяет выводить информацию во всплывающем окне;
функция confirm () позволяет спрашивать соглашение во всплывающем окне;
функция prompt() получает данные от пользователя во всплывающем окне.

Такое всплывающее окно очень удобно,
так как оно позволяет быстро и наглядно вывести нужную информацию для пользователя.

Из минусов функции можно выделить не всегда красивый и подходящий дизайн всплывающего окна.
К нему нельзя добавить стили CSS и разукрасить, а значит и «придать вид» не получится.

Функция alert позволяет вывести какую-либо информацию во всплывающем окне в браузере. */

alert("Просто вывод информации");

/* Функция confirm открывает всплывающее окно с определенным вопросом
и двумя кнопками: Ок и Отмена.
Полученные данные из окна можно проверить в условном операторе
и в зависимости от них выполнить код.
Пример вызова окна: */

var result = confirm("Вы согласны с confirm?");
// Если ок, то result будет true
// Если отмена, то result будет false

/* Метод prompt получает информацию от пользователя.
Полученные данные можно поместить в переменную.
Пример использования: */

var info = prompt("Сколько вам лет?", 25);
// Второй параметр это значение по-умолчанию
// Его можно и не добавлять
/* В примере данные будут помещены в переменную info.
После получения данных с ними можно работать как с обычной переменной.*/

alert("Какая хорошая погода!");
alert("Какая хорошая погода!");
alert("Какая хорошая погода!");
// окна сменяют друг друга после нажатия на кнопку OK во всплывающем окне

var data = confirm("Вы сейчас дома?");
if (data) {
    alert("Вы молодец!");
}

var age = prompt("Скажите, сколько вам лет?", 10);
console.log(age);

var var1 = null; // это значение можем применить к любой переменной
// означает, что внутри переменной вообще ничего нет

var person = null;
if (confirm("Вы точно уверены?")) {
    person = prompt("Введите ваше имя");
    if (person != null) {
        alert("Привет, " + person + '!');
    } else {
        alert('Вы нажали на "Отмена"');
    }    
} else {
    alert('Вы нажали на "Отмена"');
}

