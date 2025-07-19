const textAreaSentence = document.querySelector('.wrapper');
const sentenceCountText = document.querySelector('.sentence__number');

export function sentenceCount(){

  const countNumber = textAreaSentence.value.trim();
 // console.log(countNumber)

  if(countNumber === ''){
    sentenceCountText.textContent = 0;
    return 0;
  }

  const count = countNumber.split(/[.!?]+/).filter(sentence => sentence.trim() !== '');
  const countLength = count.length;

  sentenceCountText.textContent = count.length;
  return countLength;

}

textAreaSentence.addEventListener('input', sentenceCount)
