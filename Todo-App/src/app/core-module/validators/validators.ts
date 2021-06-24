import { AbstractControl, ValidationErrors } from '@angular/forms';

export function wordsLenValidator(
  minWords: number
): (control: AbstractControl) => null | ValidationErrors {
  return (control: AbstractControl) => {
    if (!control) return null;
    if (!control.value) return null;
    if (typeof control.value !== 'string') return null;

    let words = control.value.split(' ').filter((word) => word);
    if (words.length >= minWords) return null;

    return {
      words: {
        actual: words.length,
        minimum: minWords,
      },
    };
  };
}
