 let gigachatModel = require(".giga")

 const inputBox = document.getElementById('input-box');
 const button = document.getElementById('button');
 const output = document.getElementById('output');
 
 // Добавляем обработчик события клика на кнопку
 button.addEventListener('click', () => {
     // Получаем текст из поля ввода
    //  await должен быть????
     const text = gigachatModel.getMessage(inputBox.value);
 
     // Выводим текст на страницу
     output.innerText = text;
 });