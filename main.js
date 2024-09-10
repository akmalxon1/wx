const colors = ['red', 'green', 'yellow', 'black', 'blue', 'pink'];
const colorNames = ['Qizil', 'Yashil', 'Sariq', 'Qora', 'Kok', 'Pushti'];

const container = document.getElementById('text-container');

colors.forEach((color, index) => {
    const textElement = document.createElement('div');
    textElement.className = 'color-text';
    textElement.style.color = color;
    textElement.textContent = colorNames[index];
    container.appendChild(textElement);
});
