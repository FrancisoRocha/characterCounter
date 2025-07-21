const wrapperText = document.querySelector('.wrapper');
const inputChecked = document.querySelector('.character');
const inputLimitNumber = document.querySelector('.numbers');
const errorMessage = document.querySelector('#error-message');
const inputSpace = document.querySelector('.spaces');

export function inputLimit(){

  if(inputChecked.checked){
    const limit = parseInt(inputLimitNumber.value) || 0;
    //Muestra el contador de caracteres
    inputLimitNumber.style.display = 'inline-block';

    // Contar caracteres según si se excluyen espacios o no
    const text = inputSpace && inputSpace.checked
      ? wrapperText.value.replace(/\s/g, '').length  // Sin espacios
      : wrapperText.value.length;                     // Con espacios

    // Ocultar mensaje de error por defecto
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    if(limit > 0 && text >= limit){
      // Mostrar mensaje de error
      errorMessage.textContent = `Limit reached! Your text exceeds ${limit} characters`;
      errorMessage.style.display = 'block';
      // Agregar clase error al textarea
      wrapperText.classList.add('error');
    } else {
      // Remover clase error del textarea
      wrapperText.classList.remove('error');
    }

  } else {
    //Oculta el contador de caracteres
    inputLimitNumber.style.display = 'none';
    // Ocultar mensaje de error
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';
    // Remover clase error del textarea
    wrapperText.classList.remove('error');
  }

}

wrapperText.addEventListener('input', inputLimit);
inputChecked.addEventListener('click', inputLimit);

// Agregar listener para el checkbox de espacios
if(inputSpace) {
  inputSpace.addEventListener('click', inputLimit);
}
