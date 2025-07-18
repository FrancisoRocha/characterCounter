
const textArea = document.querySelector('.wrapper')
const totalNumber = document.querySelector('.total__number');

export function updateTotal(){

  const updateText = textArea.value.length;
  totalNumber.textContent = updateText;

}

textArea.addEventListener('input', updateTotal);
