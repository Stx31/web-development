let array = [];

function displayArray() {
    const arrayContainer = document.getElementById('array-container');
    arrayContainer.innerHTML = '';

    array.forEach((element, index) => {
        const div = document.createElement('div');
        div.textContent = `${index}: ${element}`;
        div.style.padding = '5px';
        div.style.borderBottom = '1px solid #ff4655';
        arrayContainer.appendChild(div);
    });
}

function addElement() {
    const elementInput = document.getElementById('array-element');
    const elementValue = elementInput.value;
    if (elementValue) {
        array.push(elementValue);
        elementInput.value = '';
        displayArray();
    }
}

function removeElement() {
    if (array.length > 0) {
        array.pop();
        displayArray();
    }
}


displayArray();
