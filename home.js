let person = {
    name: 'John',
    age: 23,
    partTime: false,
    showInfo: function(realAge) {
        showMessage(this.name + ' is ' + realAge)
    }
};

console.log(person.showInfo(23));

//

let header = document.getElementById('message');
header.style.fontWeight = '100';

//

const button = document.getElementById('see-review');

button.addEventListener('click', function() {
    const review = document.getElementById('review');
    
    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = "CLOSE REVIEW";
    } else {
        review.classList.add('d-none');
        button.textContent = "SEE REVIEW";
    } 

});

//Accessing Array Items

const values = ['a', 'b', 'c'];
values[0] = 'moon';
console.log(values[0]);

//Manipulating Arrays

// push() method

const values = ['a', 'b', 'c'];
values.push('d');
console.log(values);

values.push('meleon', 'peach');
console.log(values);

// pop() method

const values = ['a', 'b', 'c'];
const last = values.pop();
console.log(last);

// shift() method

const values = ['a', 'b', 'c'];
const first = values.shift();
console.log(first);
console.log(values);

// unshift() method

const basket = ['apples', 'oranges', 'bananas'];
basket.unshift('kiwi');
console.log(basket);

// slice() method 

const basket = ['apples', 'oranges', 'bananas'];
const selectedFruits = basket.slice(1,3);
console.log(selectedFruits);

// splice() method

const basket = ['apples', 'oranges', 'bananas'];
basket.splice(1, 0, 'kiwi');
console.log(basket);
const removed = basket.splice(1, 1);
console.log(basket);

// indexOf() method

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var appleIndex = fruits.indexOf('Apple');
console.log(appleIndex)

// filter() method

const ages = [16, 32, 33, 5, 16, 40];

const adults = ages.filter(function (age) {
    return age > 18;
});

console.log(adults);

// find() method

const fruits = ["Banana", "Orange", "Apple", "Mango", "Water meleon"];

const longestNameFruit = fruits.find(function(fruit) {
    return (fruit.length > 4);
}); 
console.log(longestNameFruit);

//forEach() method

let fruits = ["apple", "orange", "cherry"];
fruits.forEach(function(fruit) {
    console.log(fruit);
});