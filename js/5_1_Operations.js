/* В JavaScript можно выполнять все математические операции.
Это такие операции, как:

вычитание - z = y - x;
сложение - z = y + x;
умножение - z = y * x;
деление - z = y / x (на ноль делить нельзя);
остаток при делении - z = y % x; */

// Сокращенные формы математических действий
// Если операция проходит над одной и той же переменной, то можно запись сократить:
var z;
z = z + 20;
z += 20; // Эта запись аналогична той, что находится выше

// Если необходимо увеличить или уменьшить число на 1, то мы можем прописать ++ и -- соответсвенно:var z = 10;
z += 1;
z++; // Аналогично тому, что прописано выше


/*
Класс Math
JavaScript имеет большой функционал для работы с математическими операциями.
Для них предусмотрен специальный класс Math.
Обращаясь к классу и к его элементам
мы можем получить определенные значения или же воспользоваться какими-либо методами.
Полный перечень всех методов класса Math можно посмотреть по этой ссылке.
https://www.w3schools.com/js/js_math.asp
*/

var num1 = 1;
var num2 = 2;
console.log("Вычитание: " + (num1 + num2)); // результат будет 3
var str_1 = "1";
var str_2 = "2";
console.log("Сложение: " + (str_1 + str_2)); // результат будет 12
str_1 = 1;
console.log("Сложение: " + (str_1 + str_2)); // результат будет 12 - первратит в строку число
str_1 = "1";
console.log("Сложение:" + (Number(str_1) + Number(str_2))); // результат будет 3
console.log("Math: " + Math.PI);
console.log("Math: " + Math.E);
console.log("Math: " + Math.min(1, 4, 6, 2, -8, 0, 5, 7));
console.error("Аринка балда!");
console.info("Ольга балда!");
alert("Ольга балда!");
   

