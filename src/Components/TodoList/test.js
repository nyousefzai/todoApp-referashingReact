// function find_duplicate_in_array(arra1) {
//     const object = {};
//     const result = [];

//     arra1.forEach(item => {
//         if (!object[item])
//             object[item] = 0;
//         object[item] += 1;
//     })

//     for (const prop in object) {
//         if (object[prop] >= 2) {
//             result.push(prop);
//         }
//     }

//     return result;

// }

// console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));



var arr = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];

var unique = arr.filter(function (elem, index, self) {
    return index == self.indexOf(elem);
});
console.log(unique);