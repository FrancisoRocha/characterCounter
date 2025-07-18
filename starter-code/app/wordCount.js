const textAreaCount = document.querySelector('.wrapper');
const wordCountText = document.querySelector('.word__number');

export function countWords(){

  const text = textAreaCount.value.trim();

  if (text === ''){
    wordCountText.textContent = 0;
    return 0;
  }

  const words = text.split(/\s+/);
  const wordCount = words.length;

  wordCountText.textContent = words.length;
  return wordCount;
}

textAreaCount.addEventListener('input', countWords)
