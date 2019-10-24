
const mockDataArray = (number) => {
    let data = []
    for (let i = 0; i < number; i++) {
        data.push(i)
    }
    return data
}
var posts = mockDataArray(10000000)

let sum = 0;
console.time('for loop');
for (let i = 0; i < posts.length; i++) {
    sum += posts[i];
}
console.timeEnd('for loop');

sum = 0;
console.time('reduce');
sum = posts.reduce((s, p) => s += p, 0);
console.timeEnd('reduce')

sum = 0;
console.time('map');
sum = posts.map((s, p) => s += p);
console.timeEnd('map')

sum = 0;
console.time('for each');
posts.forEach(element => {
    sum += element;
});
console.timeEnd('for each');
