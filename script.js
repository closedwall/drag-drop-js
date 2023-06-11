const left = document.querySelector('.left');
const right = document.querySelector('.right');
const btn = document.querySelector('.btn');
const item = document.querySelectorAll('.item');

let draggedItem = null;

left.addEventListener('dragstart', (e) => {
    draggedItem = e.target;
});

right.addEventListener('dragover', (e) => {
    e.preventDefault();
});

right.addEventListener('drop', (e) => {
    e.target.appendChild(draggedItem);
    showMessage("Element dropped successfully");
});

btn.addEventListener('click', (e) => {
    item.forEach(element => {
        const elem = element;
        right.removeChild(element);
        left.appendChild(elem);
    });
});

function showMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    left.appendChild(messageElement);

    setTimeout(() => {
        messageElement.remove();
    }, 1000);
}





