interface Person {
    name: string;
    age: number;
}

// type Person = {
//     name: string;
//     age: number;
// }

var joop: Person = {
    name: 'jooo',
    age: 20
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean; }
function getTodo(todo: Todo) {

}