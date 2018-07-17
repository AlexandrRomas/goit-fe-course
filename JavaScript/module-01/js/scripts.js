`use strict`;


const adminLogin = `admin`;

const adminPassword = `m4ngo1zh4ackz0r`;

let userLogin;

let userPassword;

userLogin = prompt('Введите логин!');

if (userLogin === null) { userCancel = alert('Отменено пользователем!');

} else if (userLogin !== adminLogin) { userDenied = alert('Доступ запрещен!');

} else if (userLogin === adminLogin) { userPassword = prompt('Введите пароль!');

}

if (userPassword === null) { userCancel;

} else if (userPassword !== adminPassword) { userDenied;

} else if (userPassword === adminPassword) { userWelcome = alert ('Добро пожаловать!')

}





