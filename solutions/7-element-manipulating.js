import camelCase from 'lodash/camelCase';

// BEGIN
export default () => {
    const elements = document.querySelectorAll('*');

    elements.forEach((element) => {
        const classNames = element.className.split(' ');

        const normalizedClassNames = classNames.map((className) => {
        return className.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
        });

        element.className = normalizedClassNames.join(' ');
    });
}
// END