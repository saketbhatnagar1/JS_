let a = 10;
console.log(a); // Output: 10

{
    let b = 5;
    console.log(b); // Output: 5
}

console.log(b); // Throws ReferenceError: b is not defined


var x = 10;
console.log(x); // Output: 10

{
    var y = 5;
}

const PI = 3.14;
console.log(PI); // Output: 3.14

// PI = 3.14159; // This would throw an error because you cannot reassign a const variable

const myArray = [1, 2, 3];
myArray.push(4); // This is allowed because it doesn't reassign the variable, only changes its content
console.log(myArray); // Output: [1, 2, 3, 4]


console.log(y); // Output: 5

/*


var:
Variables declared with var are function-scoped or globally-scoped, but not block-scoped (i.e., variables declared inside a block like if or for are accessible outside that block).
They can be reassigned and updated within their scope.
var declarations are hoisted to the top of their function or global scope, which means you can use the variable before it's declared, though it will have the value undefined.

let:
Variables declared with let are block-scoped. They exist only within the block they are defined in.
They can be reassigned but not re-declared within the same scope.
let variables are not hoisted, so you cannot use them before the declaration.

const:
Variables declared with const are also block-scoped like let.
They cannot be reassigned once they are declared. However, for objects and arrays, the properties and elements can still be changed.
Like let, const variables are not hoisted.

*/
console.table([accountID,email,pass]);