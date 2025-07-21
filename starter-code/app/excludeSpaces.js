const inputSpace = document.querySelector('.spaces');
import { inputLimit } from './characterLimit.js';

export function handleSpaceExclusion() {
  // Cuando cambie el estado del checkbox de espacios,
  // reevaluar el límite de caracteres
  if (inputLimit) {
    inputLimit();
  }
}

// Solo agregar listener para el checkbox de espacios
if (inputSpace) {
  inputSpace.addEventListener('click', handleSpaceExclusion);
}