import escapeHtml from 'escape-html';

export default () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const email = escapeHtml(formData.get('email'));
        const name = escapeHtml(formData.get('name'));
        const comment = escapeHtml(formData.get('comment'));

        const feedbackElement = document.createElement('div');
        const feedbackText = document.createTextNode('Feedback has been sent');
        const emailElement = document.createElement('div');
        const nameElement = document.createElement('div');
        const commentElement = document.createElement('div');

        emailElement.innerHTML = 'Email: ' + email;
        nameElement.innerHTML = 'Name: ' + name;
        commentElement.innerHTML = 'Comment: ' + comment;

        feedbackElement.appendChild(feedbackText);
        feedbackElement.appendChild(emailElement);
        feedbackElement.appendChild(nameElement);
        feedbackElement.appendChild(commentElement);

        form.parentNode.replaceChild(feedbackElement, form);
    });

}

