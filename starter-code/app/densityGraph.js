const wrapperText = document.querySelector('.wrapper');
const letterDensityContainer = document.querySelector('.letter-density');
const messageElement = document.querySelector('.message');

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
  const totalLetters = getTotalLetters(letterCounts);

  // Generar el gráfico
  generateLetterBars(sortedLetters, totalLetters);
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

function generateLetterBars(sortedLetters, totalLetters) {
  // Ocultar mensaje por defecto
  messageElement.style.display = 'none';

  // Limpiar barras existentes
  const existingBars = letterDensityContainer.querySelectorAll('.bar');
  existingBars.forEach(bar => bar.remove());

  // Generar nuevas barras (mostrar solo las primeras 5-6)
  const topLetters = sortedLetters.slice(0, 6);

  topLetters.forEach(([letter, count]) => {
    const percentage = ((count / totalLetters) * 100).toFixed(2);
    const barElement = createBarElement(letter, count, percentage);
    letterDensityContainer.appendChild(barElement);
  });

  // Agregar "See more" si hay más letras
  if (sortedLetters.length > 6) {
    const seeMoreElement = createSeeMoreElement();
    letterDensityContainer.appendChild(seeMoreElement);
  }
}

function createBarElement(letter, count, percentage) {
  const barDiv = document.createElement('div');
  barDiv.className = 'bar';

  barDiv.innerHTML = `
    <span class="letter dark">${letter.toUpperCase()}</span>
    <div class="track dark">
      <div class="fill" style="width: ${percentage}%"></div>
    </div>
    <span class="value dark">${count} (${percentage}%)</span>
  `;

  return barDiv;
}

function createSeeMoreElement() {
  const seeMoreDiv = document.createElement('div');
  seeMoreDiv.className = 'see-more dark';
  seeMoreDiv.textContent = 'See more';
  return seeMoreDiv;
}

function showDefaultMessage() {
  // Mostrar mensaje por defecto
  messageElement.style.display = 'block';

  // Limpiar barras existentes
  const existingBars = letterDensityContainer.querySelectorAll('.bar, .see-more');
  existingBars.forEach(element => element.remove());
}

// Event listener para actualizar cuando se escriba
wrapperText.addEventListener('input', updateLetterDensity);
