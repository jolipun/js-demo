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