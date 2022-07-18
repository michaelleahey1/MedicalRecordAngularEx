import { AbstractControl } from '@angular/forms';

export function MyValidator(control: AbstractControl) {
  if (!control.value.startsWith('broken') || !control.value.includes('bones')) {
    return { "invaliddiagnosis": true };
  }
  return null;
}
