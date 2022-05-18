function Person(name, age) {
    this.name = name;
    this.age = age;
}
var cherryy = new Person('체리', 5);

class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성 되었습니다');
        this.name = name;
        this.age = age;
    }
}

var cherry = new Person('체리', 4); // 생성 되었습니다. 
console.log(cherry);