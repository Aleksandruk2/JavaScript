//DOM - html розмітка - яка занходиться в блоці <body>
//зберігає вказівник на елемент, який його визначає.
// function loadDOM (path) {
//     //this
// }
const loadDOM = (path) => {
    //Буду проводити підвантадення данних по шляху, який передається
    console.log("path = ", path);

    //Об'єкт, який може відправляти запити на сервер.
    const xhr = new XMLHttpRequest();
    //GET = відправити запит.
    //path - що хочемо завантажити.
    //false - дані будуть завантажуватить синхроно.
    xhr.open("GET", path, false);
    xhr.send(); //відправляю запит.
    //document - це по факту елемент <body>
    document.write(xhr.response);
}