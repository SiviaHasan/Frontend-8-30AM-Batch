// pre increment
let x=1
++x
x=++x
let y=2
y=++x + ++y
y++
console.log(x)
console.log(y)

// pre decrement operator
let a=5;
--a;
a=--a + ++a;
let b=3;
b= --a + --b + ++b;
b=--b;
--b;
console.log(a)
console.log(b)