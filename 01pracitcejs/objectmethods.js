// Sample objects
const obj = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5 };

// 1. Object.assign()
const mergedObj = Object.assign({}, obj, obj2);
console.log('Object.assign:', mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4, e: 5 }

// 2. Object.create()
const proto = { greeting: "Hello" };
const newObj = Object.create(proto);
console.log('Object.create:', newObj.greeting); // Output: Hello

// 3. Object.defineProperty()
Object.defineProperty(obj, 'newProp', {
  value: 10,
  writable: true,
  enumerable: true,
  configurable: true
});
console.log('Object.defineProperty:', obj.newProp); // Output: 10

// 4. Object.defineProperties()
Object.defineProperties(obj, {
  prop1: {
    value: 42,
    writable: true
  },
  prop2: {
    value: 'Hello',
    writable: false
  }
});
console.log('Object.defineProperties:', obj.prop1, obj.prop2); // Output: 42 Hello

// 5. Object.entries()
console.log('Object.entries:', Object.entries(obj)); // Output: [['a', 1], ['b', 2], ['c', 3], ['newProp', 10], ['prop1', 42], ['prop2', 'Hello']]

// 6. Object.freeze()
const frozenObj = Object.freeze({ foo: "bar" });
// frozenObj.foo = "baz"; // Throws an error in strict mode
console.log('Object.freeze:', frozenObj); // Output: { foo: "bar" }

// 7. Object.fromEntries()
const entries = [['f', 6], ['g', 7]];
const fromEntriesObj = Object.fromEntries(entries);
console.log('Object.fromEntries:', fromEntriesObj); // Output: { f: 6, g: 7 }

// 8. Object.getOwnPropertyDescriptor()
console.log('Object.getOwnPropertyDescriptor:', Object.getOwnPropertyDescriptor(obj, 'a')); // Output: { value: 1, writable: true, enumerable: true, configurable: true }

// 9. Object.getOwnPropertyDescriptors()
console.log('Object.getOwnPropertyDescriptors:', Object.getOwnPropertyDescriptors(obj)); // Output: { a: { value: 1, writable: true, ... }, b: { ... }, ... }

// 10. Object.getOwnPropertyNames()
console.log('Object.getOwnPropertyNames:', Object.getOwnPropertyNames(obj)); // Output: ['a', 'b', 'c', 'newProp', 'prop1', 'prop2']

// 11. Object.getOwnPropertySymbols()
const symbol = Symbol('symbol');
const symObj = { [symbol]: 'value' };
console.log('Object.getOwnPropertySymbols:', Object.getOwnPropertySymbols(symObj)); // Output: [Symbol(symbol)]

// 12. Object.getPrototypeOf()
console.log('Object.getPrototypeOf:', Object.getPrototypeOf(newObj)); // Output: { greeting: 'Hello' }

// 13. Object.is()
console.log('Object.is:', Object.is(25, 25)); // Output: true
console.log('Object.is:', Object.is(NaN, NaN)); // Output: true

// 14. Object.isExtensible()
console.log('Object.isExtensible:', Object.isExtensible(obj)); // Output: true

// 15. Object.isFrozen()
console.log('Object.isFrozen:', Object.isFrozen(frozenObj)); // Output: true

// 16. Object.isSealed()
console.log('Object.isSealed:', Object.isSealed(obj)); // Output: false

// 17. Object.keys()
console.log('Object.keys:', Object.keys(obj)); // Output: ['a', 'b', 'c', 'newProp', 'prop1', 'prop2']

// 18. Object.preventExtensions()
const extensibleObj = { x: 1 };
Object.preventExtensions(extensibleObj);
// extensibleObj.y = 2; // Throws an error in strict mode
console.log('Object.preventExtensions:', extensibleObj); // Output: { x: 1 }

// 19. Object.seal()
const sealedObj = { z: 3 };
Object.seal(sealedObj);
// sealedObj.z = 4; // Allowed
// delete sealedObj.z; // Throws an error in strict mode
console.log('Object.seal:', sealedObj); // Output: { z: 3 }

// 20. Object.setPrototypeOf()
const baseObj = { base: 10 };
Object.setPrototypeOf(newObj, baseObj);
console.log('Object.setPrototypeOf:', newObj.base); // Output: 10

// 21. Object.values()
console.log('Object.values:', Object.values(obj)); // Output: [1, 2, 3, 10, 42, 'Hello']

// 22. Object.hasOwn()
console.log('Object.hasOwn:', Object.hasOwn(obj, 'a')); // Output: true
console.log('Object.hasOwn:', Object.hasOwn(obj, 'nonexistent')); // Output: false
