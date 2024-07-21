/* JavaScript позволяет удобно и быстро проверять HTML-формы на их валидность. 
Можно использовать атрибут «onclick» для кнопки отправки
или же «onsubmit» для тега form.
Внутри функции необходимо находить все поля и брать данные из них.

Для нахождения полей можно использовать их идентификаторы:
document.getElementById('ID_ОБЪЕКТА')

При помощи условий вы можете проверять все поля
и в случае их корректности перенаправлять пользователя
куда-либо на другую страницу или отправлять данные на сервер. */

var text = document.getElementById("text");
// через встроенный в JS объект document
// мы можем управлять всей DOM структурой HTML-страницы
// и обращаться к любому объекту на странице
console.log(text.id);
console.log(text.title); // на странице заголовок title = "Обычный текст"

text.title = "Новый замененный заголовок";
console.log(text.title); // сейчас в консоль будет выведено Новый замененный заголоок

// можем менять стили для объекта 
text.style.color = "red";
text.style.backgroundColor = "blue"; // переделать background-color в backgroundColor

text.innerHTML = "New<br>string";

// находить объект можно по названию идентификатора (ID), тэга, класса
document.getElementById("text").style.color = "white"; // не обязательно создавать переменную

var spans = document.getElementsByTagName("span");
// всегда вернет массив указанных элементов,
// даже если 1 на странице
for (var i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
}

var classes = document.getElementsByClassName("simple-text");
for (var i = 0; i < classes.length; i++) {
    console.log(classes[i].innerHTML);
}

// создадим форму и научмся обрабатывать данные, которые будут поступать из нее
// с помощью JavaScript
// а затем разделим html-файл и js-файл, чтобы код не путался

document.getElementById("main-form").addEventListener("submit", checkForm); // пишем, что отслеживаем
// document.getElementById('main-form').addEventListener("click"); // можно и это событие отслеживать

// function checkForm(form) {
function checkForm(event) {
    event.preventDefault();
    //отключаем стандартное поведение страницы - перезагрузку

    // не будет переданного в функцию в html-файле элемента form
    // поэтому придется создать его
    // чтобы в html-файле страницы не было JS-кода
    var form = document.getElementById("main-form");
    // var name = document.getElementById('name').value;
    // console.log(name);
    var name = form.name.value;
    var pass = form.pass.value;
    var repass = form.repass.value;
    var state = form.state.value;
    // console.log(name + "-" + pass + "-" + repass + "-" + state); 
    // пропишем различные проверки
    var fail = "";
    if (name == "" || pass == "" || state == "")
        fail = "Заполните все поля";
    else if (name.length <= 1 || name.length > 50)
        fail = "Введите корректное имя";
    else if (pass != repass)
        fail = "Пароли должны совпадать";
    else if (pass.split("&").length > 1)
        fail = "Некорректный пароль";

    if (fail != "") {
        document.getElementById("fail").innerHTML = fail;
        // return false;
    } else {
        alert("Все данные корректно заполнены"); 
        window.location = "https://itproger.com"; // перенаправляем на любой url-адрес любой страницы
        // еще один встроенный в JS объект для управления DOM-структурой html-страницы 

        // return true;       
        // return false; // меняем true на false, чтобы эта страница не перезагружалась
        // если вернем true - страница перезагрузится
        // не успеет пройти перезагрузка на другую страницу 
    }
    // можно удалить return false из обоих условий и вынести его в общий возврат из функции
    return false;
}



