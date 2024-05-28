const str = "Hello, World!";
const str2 = "JavaScript";
const str3 = "   Hello, World!   ";

// 1. charAt()
console.log(`charAt: ${str.charAt(0)}`); // Output: H

// 2. charCodeAt()
console.log(`charCodeAt: ${str.charCodeAt(0)}`); // Output: 72

// 3. concat()
console.log(`concat: ${str.concat(' ', str2)}`); // Output: Hello, World! JavaScript

// 4. includes()
console.log(`includes: ${str.includes("World")}`); // Output: true

// 5. endsWith()
console.log(`endsWith: ${str.endsWith("World!")}`); // Output: true

// 6. indexOf()
console.log(`indexOf: ${str.indexOf("o")}`); // Output: 4

// 7. lastIndexOf()
console.log(`lastIndexOf: ${str.lastIndexOf("o")}`); // Output: 8

// 8. match()
console.log(`match: ${str.match(/o/g)}`); // Output: ['o', 'o']

// 9. repeat()
console.log(`repeat: ${str2.repeat(2)}`); // Output: JavaScriptJavaScript

// 10. replace()
console.log(`replace: ${str.replace("World", "JavaScript")}`); // Output: Hello, JavaScript!

// 11. search()
console.log(`search: ${str.search("World")}`); // Output: 7

// 12. slice()
console.log(`slice: ${str.slice(0, 5)}`); // Output: Hello

// 13. split()
console.log(`split: ${str.split(", ")}`); // Output: ['Hello', 'World!']

// 14. startsWith()
console.log(`startsWith: ${str.startsWith("Hello")}`); // Output: true

// 15. substring()
console.log(`substring: ${str.substring(0, 5)}`); // Output: Hello

// 16. toLowerCase()
console.log(`toLowerCase: ${str.toLowerCase()}`); // Output: hello, world!

// 17. toUpperCase()
console.log(`toUpperCase: ${str.toUpperCase()}`); // Output: HELLO, WORLD!

// 18. trim()
console.log(`trim: ${str3.trim()}`); // Output: Hello, World!

// 19. padStart()
console.log(`padStart: ${str2.padStart(15, '*')}`); // Output: ***JavaScript

// 20. padEnd()
console.log(`padEnd: ${str2.padEnd(15, '*')}`); // Output: JavaScript***

// 21. fromCharCode()
console.log(`fromCharCode: ${String.fromCharCode(72, 101, 108, 108, 111)}`); // Output: Hello

// 22. localeCompare()
console.log(`localeCompare: ${str.localeCompare("hello, world!")}`); // Output: -1 (or a value based on locale)

// 23. toString()
console.log(`toString: ${str2.toString()}`); // Output: JavaScript

// 24. valueOf()
console.log(`valueOf: ${str2.valueOf()}`); // Output: JavaScript

// 25. raw()
console.log(`raw: ${String.raw`Hello\nWorld`}`); // Output: Hello\nWorld

// 26. anchor()
console.log(`anchor: ${str2.anchor("anchorName")}`); // Output: <a name="anchorName">JavaScript</a>

// 27. big()
console.log(`big: ${str2.big()}`); // Output: <big>JavaScript</big>

// 28. blink()
console.log(`blink: ${str2.blink()}`); // Output: <blink>JavaScript</blink>

// 29. bold()
console.log(`bold: ${str2.bold()}`); // Output: <b>JavaScript</b>

// 30. fixed()
console.log(`fixed: ${str2.fixed()}`); // Output: <tt>JavaScript</tt>

// 31. fontcolor()
console.log(`fontcolor: ${str2.fontcolor("red")}`); // Output: <font color="red">JavaScript</font>

// 32. fontsize()
console.log(`fontsize: ${str2.fontsize(7)}`); // Output: <font size="7">JavaScript</font>

// 33. italics()
console.log(`italics: ${str2.italics()}`); // Output: <i>JavaScript</i>

// 34. link()
console.log(`link: ${str2.link("http://www.example.com")}`); // Output: <a href="http://www.example.com">JavaScript</a>

// 35. small()
console.log(`small: ${str2.small()}`); // Output: <small>JavaScript</small>

// 36. strike()
console.log(`strike: ${str2.strike()}`); // Output: <strike>JavaScript</strike>

// 37. sub()
console.log(`sub: ${str2.sub()}`); // Output: <sub>JavaScript</sub>

// 38. sup()
console.log(`sup: ${str2.sup()}`); // Output: <sup>JavaScript</sup>
