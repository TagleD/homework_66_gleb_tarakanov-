const elements = document.getElementsByClassName('element');
const length = elements.length;

for (let index = 0; index < length; index++) {
    if (index < length / 2) {
        console.log(elements[index])
        elements[index].style.color = 'red';
    }
    else {
        elements[index].style.color = 'green';
    }
}