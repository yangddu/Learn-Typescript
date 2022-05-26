// 타입 단언 (Type assertion)
var a1;
a1 = 20;
a = 'a';
var b = a as string;

// DOM API 조작
var div = document.querySelector('.container') as HTMLDivElement;
if (div) {
    div.innerText
}