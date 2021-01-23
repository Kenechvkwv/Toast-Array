// function bg_color() {
// document.getElementById('bg').style.background = 'orange';
// }

// document.getElementById('text').innerHTML=('this is Javascript text');

// document.write('hello')

// window.alert('we are here')

// console.log('Hello');

// window.print();

// var total=2+3;
// console.log(total);

// function add(){
//     var total=2+2;
//     alert(total)
// }

// add();
// var num1 = parseInt(prompt("enter your first number", "0"));
// var num2 = parseInt(prompt("enter your second number", "0"));

// function add(x,y){
//     z = x+y;
//     return z;
// }

// alert(add(num1,num2));

// var person = {name:"CJ", age:"24", gender:"male"};

// var person2 = {name:"Christ", age:"28", gender:"female"};

// console.log(person.name);

// function greet(){
//     return alert("good morning");
// }

// function bg(){
//     return alert("good morning");
// }

// var fruits = ["orange", "banana", "apple", "mango"];

// console.log(fruits);

// console.log(fruits[3]);

// console.log(fruits.length);

// fruits.push('pawpaw');

// console.log(fruits.length);

// var a = 30;

// if ((a > 20) && (a < 40)){
//     console.log(a);

// }else{
//     console.log(false);
// }


// var a = 30;

// if ((a > 20) || (a < 40)){
//     console.log(a);
// }

// else if (a=0){
//     console.log("a is zero");
// }

// var num1 = parseInt(prompt("Enter your first name"));
// var num2 = parseInt(prompt("Enter your second name"));
// var operation = prompt("select an operation");

// function cal(x, y, z) {
//     if (z == '+') {
//         return (alert(x + y));
//     } else if (z == '-') {
//         return (alert(x - y));
//     } else if (z == '*') {
//         return (alert(x * y));
//     } else if (z == '/') {
//         return (alert(x / y));
//     } else {
//         return (alert('strange lingua'))
//     }
// }

// cal(num1,num2,operation);



// for (let i = 0; i < 5; i++) {
//     var text = "The number is " + i + "<br>";    
//     document.write(text);
// }

// var data = ["iphone", "samsung", "mtn", "glo", "benz"];

// // console.log(data[3]);

// for(let i =0; i < data.length; i++) {
//     var field = data[i];
//     document.write(field + "<br>");
// }
// var num = 0

// while (num < 11){
//     num++;
//     document.write(num + "<hr>");
// }

// do{
//     var result = 2 + 5;
//     document.write(result);
// }while(result < 20);

document.getElementById('elemid').style.background = 'green';

var classname = document.getElementsByClassName('elemclass');
console.log(classname);
var tag = document.getElementsByTagName('li');
console.log(tag);
document.querySelector('li').style.cssText = "font-size:50px;color:red;"

var main = document.getElementById('main');

var new_p = document.createElement('p');
var text = document.createTextNode('This is our new paragraph');

var tag = new_p.appendChild(text);

var new_tag = main.appendChild(tag);

var ul = document.createElement('ul');

var li = document.createElement('li');

var list = ['home', 'about', 'contact', 'signin'];

for (let index = 0; index < list.length; index++) {
    var li_text = document.createTextNode(list[index]);
    var li_number = li.appendChild(li_text);

    var new_ul = ul.appendChild(li_number);


    const element = array[index];

}

document.getElementById('click').onscroll = function