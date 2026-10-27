// Массив студентов
const groupmates = [
    {
        name: "Анатолий",
        surname: "Пазов",
        group: "БСТ2351",
        marks: [4, 5, 4]
    },
    {
        name: "Иван",
        surname: "Севрюков",
        group: "БСТ2353",
        marks: [5, 4, 4]
    },
    {
        name: "Егор",
        surname: "Киселев",
        group: "БСТ2353",
        marks: [5, 5, 5]
    },
    {
        name: "Анастасия",
        surname: "Никитина",
        group: "БСТ2352",
        marks: [3, 4, 4]
    },
    {
        name: "Александр",
        surname: "Шестак",
        group: "БСТ2352",
        marks: [3, 4, 3]
    },
    {
        name: "Михайлов",
        surname: "Данила",
        group: "БСТ2352",
        marks: [5, 4, 5]
    }
];


// Вывод исходного массива
console.log("Исходный массив студентов:");
console.log(groupmates);


// Функция выравнивания текста
function rpad(value, length) {

    let str = String(value);

    while (str.length < length) {
        str = str + " ";
    }

    return str;
}


// Функция вывода списка студентов
function printStudents(students) {

    console.log("Список студентов:");

    console.log(
        rpad("Имя", 15) +
        rpad("Фамилия", 18) +
        rpad("Группа", 12) +
        rpad("Оценки", 20)
    );

    console.log("-".repeat(65));

    for (let i = 0; i < students.length; i++) {

        const student = students[i];

        console.log(
            rpad(student.name, 15) +
            rpad(student.surname, 18) +
            rpad(student.group, 12) +
            rpad(student.marks.join(", "), 20)
        );
    }

    if (students.length === 0) {
        console.log("Студенты не найдены.");
    }

    console.log("");
}


// Функция фильтрации по группе
function filterStudentsByGroup(students, groupName) {

    return students.filter(function(student) {

        return student.group.toUpperCase() ===
               groupName.trim().toUpperCase();

    });
}


// Функция вычисления среднего балла
function getAverageMark(student) {

    const sum = student.marks.reduce(
        function(total, mark) {
            return total + mark;
        },
        0
    );

    return sum / student.marks.length;
}


// Функция фильтрации по среднему баллу
function filterStudentsByAverage(students, minAverage) {

    return students.filter(function(student) {

        return getAverageMark(student) > minAverage;

    });
}


// Вывод всех студентов при загрузке страницы
printStudents(groupmates);


// Кнопка вывода всех студентов
document.getElementById("show-students").addEventListener(
    "click",
    function() {

        console.log("Все студенты:");
        printStudents(groupmates);

    }
);


// Кнопка фильтрации по группе
document.getElementById("filter-group").addEventListener(
    "click",
    function() {

        const groupName = prompt(
            "Введите название группы:",
            "БВТ1702"
        );

        if (groupName === null) {
            return;
        }

        if (groupName.trim() === "") {
            alert("Введите название группы.");
            return;
        }

        const result = filterStudentsByGroup(
            groupmates,
            groupName
        );

        console.log(
            "Студенты группы: " + groupName
        );

        printStudents(result);

    }
);


// Кнопка фильтрации по среднему баллу
document.getElementById("filter-average").addEventListener(
    "click",
    function() {

        const input = prompt(
            "Введите минимальный средний балл:",
            "4"
        );

        if (input === null) {
            return;
        }

        const value = input.trim().replace(",", ".");
        const minAverage = Number(value);

        if (value === "" || !Number.isFinite(minAverage)) {

            alert("Введите корректное число.");
            return;

        }

        const result = filterStudentsByAverage(
            groupmates,
            minAverage
        );

        console.log(
            "Студенты со средним баллом выше " + minAverage
        );

        printStudents(result);

    }
);