const wrapperText = document.querySelector('.wrapper');
const letterDensityContainer = document.querySelector('.letter-density');
const messageElement = document.querySelector('.message');

let isExpanded = false;
let allLetters = [];
let totalLetters = 0;

export function updateLetterDensity() {
  const text = wrapperText.value;

  // Si no hay texto, mostrar mensaje por defecto
  if (!text.trim()) {
    showDefaultMessage();
    return;
  }

  // Desestructuración y procesamiento del texto
  const letterCounts = getLetterCounts(text);
  const sortedLetters = getSortedLetters(letterCounts);
  totalLetters = getTotalLetters(letterCounts);

  // Guardar todas las letras para el toggle
  allLetters = sortedLetters;
  
  // Reset del estado expandido cuando cambia el texto
  isExpanded = false;

  // Generar el gráfico
  generateLetterBars();
}

function getLetterCounts(text) {
  const letterCounts = {};

  // Convertir a minúsculas y filtrar solo letras
  const letters = text.toLowerCase().match(/[a-z]/g) || [];

  // Contar cada letra
  letters.forEach(letter => {
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
  });

  return letterCounts;
}

function getSortedLetters(letterCounts) {
  // Convertir objeto a array y ordenar por frecuencia
  return Object.entries(letterCounts)
    .sort(([,a], [,b]) => b - a); // Ordenar descendente por count
}

function getTotalLetters(letterCounts) {
  return Object.values(letterCounts).reduce((sum, count) => sum + count, 0);
}

function generateLetterBars() {
  // Ocultar mensaje por defecto
  messageElement.style.display = 'none';

  // Limpiar barras existentes y botón see more
  const existingElements = letterDensityContainer.querySelectorAll('.bar, .see-more');
  existingElements.forEach(element => element.remove());

  // Determinar qué letras mostrar
  const lettersToShow = isExpanded ? allLetters : allLetters.slice(0, 5);

  // Generar barras para las letras a mostrar
  lettersToShow.forEach(([letter, count]) => {
    const percentage = ((count / totalLetters) * 100).toFixed(2);
    const barElement = createBarElement(letter, count, percentage);
    letterDensityContainer.appendChild(barElement);
  });

  // Agregar "See more" o "See less" si hay más de 5 letras
  if (allLetters.length > 5) {
    const seeMoreElement = createSeeMoreElement();
    letterDensityContainer.appendChild(seeMoreElement);
  }
}

function createBarElement(letter, count, percentage) {
  const barDiv = document.createElement('div');
  barDiv.className = 'bar';

  // Aplicar el tema correcto basado en el body
  const isDarkTheme = document.body.classList.contains('dark');
  const themeClass = isDarkTheme ? 'dark' : 'light';

  barDiv.innerHTML = `
    <span class="letter ${themeClass}">${letter.toUpperCase()}</span>
    <div class="track ${themeClass}">
      <div class="fill" style="width: ${percentage}%"></div>
    </div>
    <span class="value ${themeClass}">${count} (${percentage}%)</span>
  `;

  return barDiv;
}

function createSeeMoreElement() {
  const seeMoreDiv = document.createElement('div');
  
  // Aplicar el tema correcto basado en el body
  const isDarkTheme = document.body.classList.contains('dark');
  seeMoreDiv.className = isDarkTheme ? 'see-more dark' : 'see-more light';
  
  // Determinar el texto y el ícono según el estado
  const text = isExpanded ? 'See less' : 'See more';
  const iconPath = isExpanded ? 'M7 14l5-5 5 5z' : 'M7 10l5 5 5-5z';
  
  seeMoreDiv.innerHTML = `
    <span>${text}</span>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 8px;">
      <path d="${iconPath}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  // Agregar event listener para el toggle
  seeMoreDiv.addEventListener('click', toggleLetterDisplay);
  
  return seeMoreDiv;
}

function toggleLetterDisplay() {
  isExpanded = !isExpanded;
  generateLetterBars();
}

function showDefaultMessage() {
  // Mostrar mensaje por defecto
  messageElement.style.display = 'block';

  // Limpiar barras existentes y reset del estado
  const existingElements = letterDensityContainer.querySelectorAll('.bar, .see-more');
  existingElements.forEach(element => element.remove());
  
  // Reset del estado
  isExpanded = false;
  allLetters = [];
  totalLetters = 0;
}

// Event listener para actualizar cuando se escriba
wrapperText.addEventListener('input', updateLetterDensity);