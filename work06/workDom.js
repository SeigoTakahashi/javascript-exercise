'use strict';

console.log('***** getElementById');
console.log(document.getElementById('wk10'));
console.log(document.getElementById('wk99'));
console.log(document.getElementById('wkZZ'));

console.log('***** getElementsByClassName');
console.log(document.getElementsByClassName('csA'));
console.log(document.getElementsByClassName('csZZ'));

console.log('***** getElementsByTagName');
console.log(document.getElementsByTagName('button'));
console.log(document.getElementsByTagName('zzz'));

console.log('***** querySelector');
console.log(document.querySelector('#wk11'));
console.log(document.querySelector('.csB'));
console.log(document.querySelector('input'));
console.log(document.querySelector('#wkZZ'));

console.log('***** querySelectorAll');
console.log(document.querySelectorAll('#wk99'));
console.log(document.querySelectorAll('.csA'));
console.log(document.querySelectorAll('button'));
console.log(document.querySelectorAll('zzz'));


console.log('***** Array.from getElementsByTagName');
Array.from(document.getElementsByTagName('button')).forEach(e => {
    console.log(e.tagName + ':' + e.textContent);
});
console.log('***** Array.from querySelectorAll');
Array.from(document.querySelectorAll('button')).forEach(e => {
    console.log(e.tagName + ':' + e.textContent);
});
console.log('***** [...HtmlCollection] getElementsByTagName');
[...document.getElementsByTagName('button')].forEach(e => {
    console.log(e.tagName + ':' + e.textContent);
});
console.log('***** [...NodeList] querySelectorAll');
[...document.querySelectorAll('button')].forEach(e => {
    console.log(e.tagName + ':' + e.textContent);
});
console.log('***** そのままforEach querySelectorAll');
document.querySelectorAll('button').forEach(e => {
    console.log(e.tagName + ':' + e.textContent);
});


// DOM配置
let element1 = document.createElement('div');
element1.innerText = 'div作成-element1';
element1.style.color = 'red';
document.getElementById('work1').append(element1)

let element2 = document.createElement('div');
element2.innerText = 'div作成-element2';
element2.style.color = 'red';
document.getElementById('work1').prepend(element2);

let element3 = document.createElement('div');
element3.innerText = 'div作成-element3';
element3.style.color = 'red';
document.getElementById('work1').append(element3);

let element4 = document.createElement('div');
element4.innerText = 'div作成-element4';
element4.style.color = 'red';
document.getElementById('work1').insertBefore(element4, element1);

let element5 = document.createElement('div');
element5.innerText = 'div作成-element5';
element5.style.color = 'red';
document.getElementById('work1').before(element5);

let element6 = document.createElement('div');
element6.innerText = 'div作成-element6';
element6.style.color = 'red';
document.getElementById('work1').after(element6);

// DOMイベント
let elementEvent = document.createElement('div');
elementEvent.innerText = 'div-event';
elementEvent.addEventListener('click', () => elementEvent.innerText = 'おした');
elementEvent.addEventListener('mouseover', () => elementEvent.innerText = 'マウスのった');
elementEvent.addEventListener('mouseout', () => elementEvent.innerText = 'マウスはずれた');
document.getElementById('work1').append(elementEvent);

// イベント引数
let elementEventArg = document.createElement('div');
elementEventArg.innerText = 'div-event-arg';
elementEventArg.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.currentTarget);
    e.currentTarget.innerText = e.type;
    e.stopPropagation();
});
document.getElementById('work1').append(elementEventArg);
