'use strict';       // не позволяет браузеру читать скрипт без вызова переменной
var name = "Hehe";    //основная переменная 
let hobbies;
// var name = "ElDD"    // если бы использовал let то выдало бы ошибку (Это не хорошо когда переменная меняется)

if (name === 'Hehe') {
   let hobbies = ("Playgame, dancing");
   console.log(hobbies);
}

function sup (){
    var age = 30;
    var name = 'Man';       //теневая переменная не работает при var так как, var не знает что это такое 
    console.log(name,age);
}
console.log(name,hobbies);

sup();

bb = "fjfjfhhgjg";
console.log(bb);

