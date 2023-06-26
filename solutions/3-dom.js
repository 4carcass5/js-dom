// BEGIN

const bodyContent = document.body.innerHTML.trim();
const lines = bodyContent.split('\n');
document.body.innerHTML = '';
lines.forEach(line => {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = line.trim();
    document.body.appendChild(paragraph);
});

// END