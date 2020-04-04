/* let person = {
    name: 'John',
    age: 23,
    partTime: false,
    showInfo: function(realAge) {
        showMessage(this.name + ' is ' + realAge)
    }
};

console.log(person.showInfo(23)); */

/* let header = document.getElementById('message');
header.style.fontWeight = '100'; */

let button = document.getElementById('see-review');

button.addEventListener('click', function() {
    console.log('click');
})