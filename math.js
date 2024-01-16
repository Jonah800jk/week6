const math = docment.getElementsByTagName('li')

let x = 10
let y = 5
let a = 16
let b = 3

let z = x + y
math[0].innerHTML = 'x + Y is' + z

let c = a / y
math[1].innerHTML = 'a/y is: ' + c

let d = a % y
math[2].innerText = 'a % y is: ' + d

math[3].innerHTML = 'd to the power of b: '+ d**b

math[4].textContent = 