// BEGIN
function getTextContent(domElement) {
    const paragraphs = domElement.querySelectorAll('p');
    const content = Array.from(paragraphs).reduce((result, p) => {
      const paragraphContent = p.textContent.trim();
      result.push(paragraphContent);
      return result;
    }, []);
    return content;
}

export default getTextContent;
// END