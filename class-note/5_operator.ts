// function logMessage(value: any) {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);
// logMessage(false);


// var jooooo: string | number | boolean;
// function logMessage(value: string | number) {
//     if (typeof value === 'number') {
//         value.toLocaleString();
//     }
//     if (typeof value === 'string') {
//         value.toString();
//     }
//     throw new TypeError('value must be string or number');
// }

// logMessage('hello');
// logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// function askSomeone(someone: Developer | Person) {
//     someone.name
//     // 유니온 타입에 여러 개 썼을 경우 보장된 속성에 대해서만 제공한다
// }

function askSomeone(someone: Developer & Person) {
    someone.name;
    someone.skill;
    someone.age;
}

// var hoho: string | number | boolean;
// var cherr: string & number & boolean;