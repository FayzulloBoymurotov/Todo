var newUl = document.createElement('ul');
var container = document.querySelector('.container');
container.appendChild(newUl);

var newArray = [];

newUl.setAttribute('class', 'list-items');

form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    if (input.value === '') {
        input.style.border = '2px solid red';
        input.placeholder = 'Error';
    } else {
        var newLi = document.createElement('li');

        var newbtn = document.createElement('button');

        newLi.setAttribute('class', 'list-item',);

        newLi.textContent = input.value.trim();

        newLi.appendChild(newbtn);

        newbtn.textContent = ('Delete');

        newUl.appendChild(newLi);

        input.value = null;
    }

});
