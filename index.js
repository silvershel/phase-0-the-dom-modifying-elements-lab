// Write your code here!
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
const yourName = 'SHELLI';
newHeader.textContent = `${yourName} is the champion`;
document.body.appendChild(newHeader);