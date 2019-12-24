var arr = [{x:1},{x:2},{x:3}]
var arr2 = [{x:1},{x:2}]
console.log('Arr',arr)
console.log('Arr2',arr2)
let result = arr.filter(o1 => arr2.some(o2 => o1.x === o2.x));
console.log('Result',result);