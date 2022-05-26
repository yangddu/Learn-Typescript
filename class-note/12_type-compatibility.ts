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
