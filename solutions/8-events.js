export default () => {
  // BEGIN
  const btn = document.querySelector('#alert-generator');
  const cont = document.querySelector('.alerts');
  let c  = 1;
  
  btn.addEventListener('click', () => {
    const alert = document.createElement('div');
    alert.textContent = `Alert ${c}`;
    alert.className = 'alert alert-primary';
  
    cont.prepend(alert);
    c++;
  });
  // END
};