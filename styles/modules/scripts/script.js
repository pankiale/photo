const formSubmit = document.querySelectorAll('.form');
const buttonSubmit = document.querySelectorAll('.form__submit');

function formSubmitHandler(evt) {
  evt.preventDefault();
  buttonSubmit.forEach(element => {
    element.textContent = 'Круто, спасибо за доверие!'
  }) 
};

formSubmit.forEach(element => {
  element.addEventListener('submit', formSubmitHandler);  
});
