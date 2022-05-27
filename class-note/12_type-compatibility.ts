// 인터페이스
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    skill: string;
}

var develper: Developer;
var person: Person;
// developer = person;
// 구조적으로 오른쪽에 있는 타입이 더 크거나 많을 때 가능 

person = develper;
develper = person;

// 함수
var addF = function(a: number) {
    // ...
}

var sumF = function(a: number, b: number) {
    // ...
}

sumF = addF;

// 제네릭
interface Empty<T> {
    // ...
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1; 

interface NotEmpty<T> {
    data: T;
}

var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2;
notempty2 = notempty1;